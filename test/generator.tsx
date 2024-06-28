import { currentModulePath, findUp } from '@tech_query/node-toolkit';
import { filter, traverse } from 'fs-match';
import { readFile } from 'fs/promises';
import { dirname, relative, resolve } from 'path';
import { TSConfigJSON } from 'types-tsconfig';
import { fs } from 'zx';

import { compile } from '@mdx-js/mdx';
import RemarkFrontmatter from 'remark-frontmatter';
import RemarkGFM from 'remark-gfm';
import RemarkMdxFrontmatter from 'remark-mdx-frontmatter';

import { DOMRenderer } from 'dom-renderer';
import { Window } from 'happy-dom';

const anchorPath = currentModulePath(),
    MarkdownFilePattern = /\.(mdx?|markdown)$/i,
    window = new Window(),
    renderer = new DOMRenderer();
var TSConfig: TSConfigJSON = {};

for (const key of [
    'Text',
    'Element',
    'HTMLElement',
    'HTMLUnknownElement',
    'document'
])
    Reflect.set(globalThis, key, window[key]);

(async () => {
    for (const filePath of findUp(anchorPath))
        if (filePath.endsWith('tsconfig.json'))
            TSConfig = await fs.readJSON(filePath);

    const { jsxImportSource } = TSConfig.compilerOptions;

    for await (const filePath of filter(
        traverse(process.argv[2]),
        MarkdownFilePattern
    )) {
        const vFile = await compile((await readFile(filePath)) + '', {
            jsxImportSource,
            remarkPlugins: [RemarkGFM, RemarkFrontmatter, RemarkMdxFrontmatter]
        });
        const cacheModulePath = resolve(
            '.mdx-cache',
            filePath.replace(/\.(mdx?|markdown)$/i, '.js')
        );
        await fs.outputFile(cacheModulePath, vFile + '');

        const { frontmatter, default: Content } = await import(
            relative(dirname(anchorPath), cacheModulePath).replace(/\\/g, '/')
        );
        const { layout = 'index' } = frontmatter;

        const { default: Layout } = await import(`./layout/${layout}`);

        const markup = renderer.renderToStaticMarkup(
            <Layout {...frontmatter}>
                <Content />
            </Layout>
        );
        await fs.outputFile(
            filePath.replace(MarkdownFilePattern, '.html'),
            markup
        );
    }
})();
