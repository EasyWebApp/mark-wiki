import { WebCellProps, createCell } from 'web-cell';
import { PageMeta } from 'mark-cell/source/type';
import { join } from 'path';

interface BlogProps extends PageMeta, WebCellProps {
    base: string;
}

export function Blog({
    base,
    path,
    title,
    date,
    authors,
    defaultSlot
}: BlogProps) {
    return (
        <div className="blog-post">
            {defaultSlot[0] ? (
                <h1 className="blog-post-title">{title}</h1>
            ) : (
                <h2 className="blog-post-title">
                    <a href={`${base}/${path}/index.html`}>{title}</a>
                </h2>
            )}
            <p className="blog-post-meta">
                {new Date(date).toLocaleString()} created by{' '}
                {authors?.map(author => (
                    <a
                        className="mr-2"
                        href={join(base, 'authors', author, 'index.html')}
                    >
                        {author}
                    </a>
                ))}
            </p>
            {defaultSlot}
        </div>
    );
}
