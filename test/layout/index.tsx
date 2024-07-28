import { PropsWithChildren } from 'web-cell';

export default ({
    title,
    children
}: PropsWithChildren<Partial<Record<'title' | 'date' | 'layout', string>>>) => (
    <html>
        <head>
            <title>{title}</title>
        </head>
        <body>{children}</body>
    </html>
);
