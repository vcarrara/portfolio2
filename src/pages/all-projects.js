import React from 'react'
import { graphql } from 'gatsby'
import { MainLayout, TimelineLayout } from '../components/layouts'

const AllProjectsPage = ({ data }) => {
    const {
        topics: { group, totalCount },
    } = data

    return (
        <MainLayout>
            <TimelineLayout items={group} total={totalCount} title="All projects" />
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
