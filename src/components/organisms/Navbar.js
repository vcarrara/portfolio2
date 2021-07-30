import React from 'react'
import { Link } from 'gatsby'
import tw, { styled } from 'twin.macro'
import ThemeSwitcher from '../atoms/ThemeSwitcher'

const NavbarWrapper = tw.div`flex justify-between px-8 py-4 bg-texture-500`

const ContactMeLink = tw.a`inline-flex items-center border border-transparent px-3.5 py-2 leading-4 font-medium rounded-full bg-primary-500 hover:bg-primary-400`

const StyledLink = styled(Link)`
    ${tw`inline-flex items-center border border-transparent px-3.5 py-2 rounded-full bg-transparent`}
    &.active {
        ${tw`bg-texture-600`}
    }
    &:hover {
        ${tw`bg-texture-600`}
    }
`

const AllProjectsLink = styled(StyledLink)`
    ${tw`mr-4 relative`}
    &::before {
        content: '';
        ${tw`absolute bg-primary-500 w-0.5 -right-2 top-0 h-full`}
    }
`

function Navbar() {
    return (
        <NavbarWrapper>
            <div>
                <span tw="font-medium text-xl">
                    <StyledLink to="/">
                        Portfo<span tw="text-primary-500">lio.</span>
                    </StyledLink>
                </span>
            </div>
            <div tw="space-x-1 flex flex-row items-center">
                <ThemeSwitcher />
                <AllProjectsLink activeClassName="active" to="/all-projects">
                    All projects
                </AllProjectsLink>
                <StyledLink activeClassName="active" to="/web">
                    Web
                </StyledLink>
                <StyledLink activeClassName="active" to="/programming">
                    Programming
                </StyledLink>
                <StyledLink activeClassName="active" to="/devops">
                    DevOps
                </StyledLink>
                <StyledLink activeClassName="active" to="/data">
                    Data
                </StyledLink>
                <ContactMeLink href="https://www.linkedin.com/in/victor-carrara/" target="_blank" rel="noreferrer">
                    Contact
                </ContactMeLink>
            </div>
        </NavbarWrapper>
    )
}

export default Navbar
