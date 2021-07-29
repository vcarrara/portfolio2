import React from 'react'
import { Link } from 'gatsby'
import tw, { styled } from 'twin.macro'

const NavbarWrapper = tw.div`flex justify-between px-8 py-4 bg-background`

const StyledLink = styled(Link)`
    ${tw`relative h-full font-medium`}
    &::after {
        content: '';
        width: 0%;
        height: 0.1rem;
        left: -10%;
        bottom: -10px;
        transition: width ease-in-out 200ms;
        ${tw`absolute bg-primary`}
    }
    &:hover::after {
        width: 120%;
    }
`
const AllProjectsLink = styled(StyledLink)`
    ${tw`mr-4`}
    &::before {
        content: '';
        ${tw`absolute bg-primary w-0.5 -right-4 top-0 h-full`}
    }
`

const ContactMeLink = tw.a`inline-flex items-center border border-transparent px-3.5 py-2 leading-4 font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-lighter`

function Navbar() {
    return (
        <NavbarWrapper>
            <div>
                <span tw="font-medium text-xl">
                    <StyledLink to="/">
                        Portfo<span tw="text-primary">lio.</span>
                    </StyledLink>
                </span>
            </div>
            <div tw="space-x-4">
                <AllProjectsLink to="/all-projects">All my projects</AllProjectsLink>
                <StyledLink to="/web">Web</StyledLink>
                <StyledLink to="/programming">Programming</StyledLink>
                <StyledLink to="/devops">DevOps</StyledLink>
                <StyledLink to="/data">Data</StyledLink>
                <ContactMeLink href="https://www.linkedin.com/in/victor-carrara/" target="_blank" rel="noreferrer">
                    Contact me
                </ContactMeLink>
            </div>
        </NavbarWrapper>
    )
}

export default Navbar
