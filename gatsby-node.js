const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const {
        data: { allMarkdownRemark },
    } = await graphql(`
        query {
            allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/categories/.*md$/" } }) {
                nodes {
                    frontmatter {
                        uri
                        title
                        category
                    }
                }
            }
        }
    `)
    allMarkdownRemark.nodes.forEach((node) => {
        const { frontmatter } = node
        createPage({
            path: frontmatter.uri,
            component: path.resolve('src/templates/category.js'),
            context: {
                category: frontmatter.category,
                title: frontmatter.title,
            },
        })
    })
}
