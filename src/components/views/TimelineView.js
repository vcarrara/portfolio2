import React from 'react'
import 'twin.macro'
import { Container, Badge } from '../atoms'
import { Timeline, TimelineEntry, TimelineYear } from '../organisms/Timeline'

const TimelineView = ({ title, total, items }) => {
    return (
        <Container tw="space-y-8">
            <div tw="space-y-4">
                <h1 tw="text-6xl font-bold">{title}</h1>
                <div>
                    <Badge>{total}</Badge> results found.
                </div>
            </div>
            <Timeline>
                {items
                    .sort((a, b) => b.fieldValue - a.fieldValue)
                    .map(({ fieldValue, nodes }) => (
                        <React.Fragment key={fieldValue}>
                            <TimelineYear>{fieldValue}</TimelineYear>
                            {nodes.map(({ id, html, frontmatter }) => (
                                <div key={id}>
                                    <TimelineEntry>
                                        <div tw="space-y-8">
                                            <h3 tw="text-3xl font-bold">{frontmatter.title}</h3>
                                            <div tw="text-justify" dangerouslySetInnerHTML={{ __html: html }} />
                                            <div tw="space-x-1 text-4xl">
                                                {frontmatter.icons.map(([title, className]) => (
                                                    <span key={title} title={title}>
                                                        <i className={className}></i>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </TimelineEntry>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
            </Timeline>
        </Container>
    )
}

export default TimelineView
