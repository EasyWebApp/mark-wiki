import { createCell } from 'web-cell';
import { PageProps } from 'mark-cell/source/type';

import { Frame } from './Frame';
import { Blog } from './Blog';

export function GroupFrame({ pages, defaultSlot, ...props }: PageProps) {
    const base = props.path.replace(/[^/]+/g, '..');

    return (
        <Frame {...props}>
            <h3 className="pb-4 mb-4 font-italic border-bottom">
                From the Firehose
            </h3>

            {pages.map(page => (
                <Blog base={base} {...page} />
            ))}
        </Frame>
    );
}
