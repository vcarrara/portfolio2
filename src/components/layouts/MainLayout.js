import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { Container } from '../atoms'
import { Navbar } from '../organisms'

const MainLayout = ({ children }) => {
    const {
        site: { buildTime },
    } = useStaticQuery(graphql`
        query {
            site {
                buildTime(formatString: "YYYY")
            }
        }
    `)
    return (
        <React.Fragment>
            <GlobalStyles />
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>
                <Container>
                    <p>@Copyright {buildTime} - Victor Carrara</p>
                    <p>
                        Created and designed with ❤️, Gatsby <i className="devicon-gatsby-plain"></i>, React <i className="devicon-react-plain"></i>, GraphQL{' '}
                        <i className="devicon-graphql-plain"></i> and Tailwind CSS <i className="devicon-tailwindcss-plain"></i>.
                    </p>
                </Container>
            </footer>
        </React.Fragment>
    )
}

export default MainLayout
