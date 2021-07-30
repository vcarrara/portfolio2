import React from 'react'
import { graphql } from 'gatsby'
import { MainLayout } from '../components/layouts'
import { TimelineView } from '../components/views'

const AllProjectsPage = ({ data }) => {
    const {
        topics: { group, totalCount },
    } = data

    return (
        <MainLayout>
            <TimelineView items={group} total={totalCount} title="All projects" />
        </MainLayout>
    )
}

export const pageQuery = graphql`
    query {
        topics: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/topics/.*md$/" } }) {
            totalCount
            group(field: frontmatter___date) {
                fieldValue
                nodes {
                    html
                    frontmatter {
                        categories
                        date
                        icons
                        title
                    }
                }
            }
        }
    }
`

export default AllProjectsPage
