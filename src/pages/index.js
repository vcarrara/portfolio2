import { graphql } from 'gatsby'
import React from 'react'
import Landing from '../components/Landing'
import { MainLayout } from '../components/layouts'

const IndexPage = ({
    data: {
        topics,
        categories: { nodes },
        total: { totalCount }
    },
}) => {
    const topicsCount = topics.group.reduce((accumulator, { fieldValue, totalCount }) => ({ ...accumulator, [fieldValue]: totalCount }), {})
    const categories = nodes.map((category) => ({ ...category, count: topicsCount[category.frontmatter.category] }))

    return (
        <MainLayout>
            <Landing categories={categories} totalCount={totalCount} />
        </MainLayout>
    )
}

export const pageQuery = graphql`
    query {
        topics: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/topics/.*md$/" } }) {
            group(field: frontmatter___categories) {
                fieldValue
                totalCount
            }
        }

        categories: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/categories/.*md$/" } }) {
            nodes {
                id
                html
                frontmatter {
                    category
                    icons
                    title
                    uri
                }
            }
        }

        total: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/topics/.*md$/" } }) {
            totalCount
        }
    }
`

export default IndexPage
