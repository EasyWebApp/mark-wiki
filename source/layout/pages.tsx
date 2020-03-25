import { createCell, Fragment } from 'web-cell';
import { PageProps } from 'mark-cell/source/type';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';
import { Card } from 'boot-cell/source/Content/Card';
import { Badge } from 'boot-cell/source/Reminder/Badge';
import { Color } from 'boot-cell/source/utility/constant';

import { GroupFrame } from './GroupFrame';

function Header({ path, pages }: PageProps) {
    const base = path.replace(/[^/]+/g, '..');

    return (
        <Fragment>
            <Jumbotron
                className="bg-dark text-white rounded"
                title={<span className="font-italic">{pages[0]?.title}</span>}
                description={<Fragment />}
            >
                <p className="lead mb-0">
                    <a
                        className="text-white font-weight-bold"
                        href={`${base}/${pages[0]?.path}/index.html`}
                    >
                        Continue reading...
                    </a>
                </p>
            </Jumbotron>

            <div className="d-flex justify-content-between mb-4">
                {pages.slice(1, 3).map(({ path, title, date, tags }) => (
                    <Card
                        className="shadow"
                        style={{ width: '49%' }}
                        direction="horizontal"
                        image={base + '/../../source/asset/thumbnail.svg'}
                        title={
                            <a href={`${base}/${path}/index.html`}>{title}</a>
                        }
                        text="This is a wider card with supporting text below as a natural lead-in to additional content."
                    >
                        {tags?.map((tag, index) => (
                            <Badge
                                kind={Color[index]}
                                href={`${base}/tags/${tag}/index.html`}
                            >
                                {tag}
                            </Badge>
                        ))}
                        <div className="my-1 text-muted">
                            {new Date(date).toLocaleString()}
                        </div>
                    </Card>
                ))}
            </div>
        </Fragment>
    );
}

export function pages(props: PageProps) {
    return <GroupFrame {...props} header={<Header {...props} />} />;
}
