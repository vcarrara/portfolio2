module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'portfolio-gatsby',
        description: 'Portfolio of Victor Carrara',
    },
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'topics',
                path: `${__dirname}/src/markdown/topics`,
            },
            __key: 'topics',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'categories',
                path: `${__dirname}/src/markdown/categories`,
            },
            __key: 'categories',
        },
    ],
}
