import { createCell } from 'web-cell';
import { PageProps } from 'mark-cell/source/type';
import { Icon } from 'boot-cell/source/Reminder/Icon';
import { Button } from 'boot-cell/source/Form/Button';

import { HTMLBox } from './HTMLBox';
import { channels } from './data.json';

export function Frame({
    path,
    title,
    header,
    defaultSlot,
    prev,
    next,
    site: { archives }
}: PageProps) {
    const base = path.replace(/[^/]+/g, '..');

    title = process.env.npm_package_name;

    return (
        <HTMLBox base={base} title={title}>
            <div className="container">
                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1">
                            <a className="link-secondary">Subscribe</a>
                        </div>
                        <div className="col-4 text-center">
                            <a className="blog-header-logo text-dark" href=".">
                                {title}
                            </a>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <a className="link-secondary" aria-label="Search">
                                <Icon name="search" />
                            </a>
                            <Button kind="secondary" outline size="sm">
                                Sign up
                            </Button>
                        </div>
                    </div>
                </header>

                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                        {channels.map(({ title }) => (
                            <a className="p-2 link-secondary">{title}</a>
                        ))}
                    </nav>
                </div>

                {header}
            </div>

            <main className="container">
                <div className="row">
                    <div className="col-md-8 blog-main">
                        {defaultSlot}

                        <nav className="blog-pagination">
                            {prev && (
                                <Button
                                    className="mr-2"
                                    outline
                                    href={`${base}/${prev.path}/index.html`}
                                >
                                    Older
                                </Button>
                            )}
                            {next && (
                                <Button
                                    kind="secondary"
                                    outline
                                    href={`${base}/${next.path}/index.html`}
                                >
                                    Newer
                                </Button>
                            )}
                        </nav>
                    </div>

                    <aside className="col-md-4 blog-sidebar">
                        <div className="p-4 mb-3 bg-light rounded">
                            <h4 className="font-italic">About</h4>
                            <p className="mb-0">
                                Etiam porta <em>sem malesuada magna</em> mollis
                                euismod. Cras mattis consectetur purus sit amet
                                fermentum. Aenean lacinia bibendum nulla sed
                                consectetur.
                            </p>
                        </div>

                        <div className="p-4">
                            <h4 className="font-italic">Archives</h4>
                            <ol className="list-unstyled mb-0">
                                {Object.keys(archives).map(title => (
                                    <li>
                                        <a
                                            href={`${base}/archives/${title}/index.html`}
                                        >
                                            {title}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="p-4">
                            <h4 className="font-italic">Elsewhere</h4>
                            <ol className="list-unstyled">
                                <li>
                                    <a href="https://github.com/EasyWebApp/mark-wiki">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a>Twitter</a>
                                </li>
                                <li>
                                    <a>Facebook</a>
                                </li>
                            </ol>
                        </div>
                    </aside>
                </div>
            </main>

            <footer className="blog-footer">
                <p>
                    Blog template built for{' '}
                    <a href="https://bootstrap.web-cell.dev/">BootCell</a> by{' '}
                    <a href="https://twitter.com/mdo">@mdo</a> &amp;
                    <a href="https://github.com/TechQuery">@TechQuery</a>.
                </p>
                <p>
                    <a href="#top">Back to top</a>
                </p>
            </footer>
        </HTMLBox>
    );
}
