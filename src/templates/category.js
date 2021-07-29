import React from 'react'
import { graphql } from 'gatsby'
import { MainLayout, TimelineLayout } from '../components/layouts'

const Template = ({ data, pageContext }) => {
    const {
        topics: { group, totalCount },
    } = data

    return (
        <MainLayout>
            <TimelineLayout items={group} total={totalCount} title={pageContext.title} />
        </MainLayout>
    )
}

export const query = graphql`
    query ($category: String!) {
        topics: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/topics/.*md$/" }, frontmatter: { categories: { eq: $category } } }) {
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

export default Template
