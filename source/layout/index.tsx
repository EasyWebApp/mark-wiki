import { createCell } from 'web-cell';
import { PageProps } from 'mark-cell/source/type';

import { Frame } from './Frame';
import { GroupFrame } from './GroupFrame';
import { Blog } from './Blog';

export * from './pages';

export function article({ defaultSlot, ...props }: PageProps) {
    const base = props.path.replace(/[^/]+/g, '..');

    return (
        <Frame {...props}>
            <Blog base={base} {...props}>
                {defaultSlot}
            </Blog>
        </Frame>
    );
}

export function authors({ title, ...rest }: PageProps) {
    title = 'Author: ' + title;

    return <GroupFrame title={title} {...rest} />;
}

export function archives({ title, ...rest }: PageProps) {
    title = 'Archive: ' + title;

    return <GroupFrame title={title} {...rest} />;
}

export function categories({ title, ...rest }: PageProps) {
    title = 'Category: ' + title;

    return <GroupFrame title={title} {...rest} />;
}

export function tags({ title, ...rest }: PageProps) {
    title = 'Tag: ' + title;

    return <GroupFrame title={title} {...rest} />;
}
