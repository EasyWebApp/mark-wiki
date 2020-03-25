import { WebCellProps, createCell } from 'web-cell';

interface HTMLBoxProps extends WebCellProps {
    title: string;
    base: string;
}

export function HTMLBox({ title, base, defaultSlot }: HTMLBoxProps) {
    return (
        <html>
            <head>
                <title>{title}</title>

                <base href="/" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    href={base + '/../../source/asset/font.css'}
                />
                <link
                    rel="stylesheet"
                    href={base + '/../../source/asset/index.less'}
                />
                <script src="https://polyfill.io/v3/polyfill.min.js?flags=gated&amp;features=Object.fromEntries%2CArray.prototype.flat"></script>
                <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.4.3/webcomponents-bundle.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.4.3/custom-elements-es5-adapter.js"></script>
            </head>
            <body>{defaultSlot}</body>
        </html>
    );
}
