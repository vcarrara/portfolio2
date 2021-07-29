import React from 'react'
import tw, { styled } from 'twin.macro'

const TimelineYear = styled.div``
const TimelineGroup = styled.div``
const TimelineDate = styled.div``
const TimelineContent = styled.div``

const Timeline = styled.div`
    ${tw`relative flex flex-col py-12 space-y-16`}
    &::before {
        content: '';
        left: 30px;
        z-index: -1;
        ${tw`absolute w-1 h-full bg-primary top-0`}
    }

    ${TimelineYear} {
        border-radius: 40px;
        padding: 0.7rem;
        ${tw`bg-primary w-16 text-center`}
    }

    ${TimelineGroup} {
        ${tw`flex flex-row justify-between text-center`}

        ${TimelineDate} {
            margin-left: 22px;
            ${tw`flex items-center rounded-full w-5 h-5 bg-primary`}
            &::after {
                content: '';
                width: calc(100% - 22px);
                height: 2px;
                z-index: -1;
                left: 22px;
                ${tw`absolute bg-primary`}
            }
        }
        ${TimelineContent} {
            width: 500px;
            border: 2px solid;
            ${tw`rounded-2xl bg-background-lighter p-6 border-primary`}
        }
    }
`

const TimelineEntry = ({ children, ...props }) => (
    <TimelineGroup {...props}>
        <TimelineDate />
        <TimelineContent>{children}</TimelineContent>
    </TimelineGroup>
)

export { Timeline, TimelineYear, TimelineEntry }
