import { Link } from 'gatsby'
import React from 'react'
import tw from 'twin.macro'
import { Badge, Button, Container, Title } from './atoms'

const StyledLink = tw(
    Link
)`inline-flex items-center border border-transparent px-3.5 py-2 text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-lighter`

const Display = tw.h1`text-8xl font-bold`

const Landing = ({ categories, totalCount }) => {
    return (
        <Container tw="space-y-16">
            <div tw="grid grid-cols-12">
                <div tw="col-span-1 text-5xl flex flex-col items-center justify-center space-y-8">
                    <a href="https://github.com/vcarrara" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/victor-carrara/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <div tw="col-span-11 space-y-2">
                    <Display>Hi!</Display>
                    <Display>
                        I am <span tw="text-primary">Victor</span>
                    </Display>
                    <Display tw="text-6xl">Software Engineer</Display>
                    <div tw="space-y-8">
                        <p tw="font-medium text-base text-justify">
                            I am currently studying an engineering degree in computing sciences with a specialization in{' '}
                            <span tw="text-primary">software innovation</span>. I am someone dynamic, motivated, professional and I can work in teams as much as
                            alone. My past experiences have proven that I am able to work with lots of different problematic and technologies.
                        </p>
                        <StyledLink to="/all-projects">Discover my work</StyledLink>
                    </div>
                </div>
            </div>
            <div tw="space-y-4">
                <Title>What I do</Title>
                <p tw="font-medium text-base text-justify">
                    I have spent the last five years surpassing myself in my training and professional experiences to give me the means to excel in what I am
                    engaged in. I put my skills, my creativity, my curiosity and my ethic to the benefit of my projects and I always learn from a past
                    experience, no matter the result. Thanks to the plurality of professional, school and personal projects that I have realised in teams, I
                    will use my knowledges, my skills and my experience to be proficient on what I am working on.
                </p>
            </div>
            <div tw="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map(({ id, html, frontmatter, count }) => (
                    <div key={id} tw="rounded-2xl bg-background-lighter p-6 space-y-4">
                        <div tw="space-x-2 text-3xl">
                            {frontmatter.icons.map(([description, className]) => (
                                <span title={description} key={`devicon_${className}`}>
                                    <i className={className}></i>
                                </span>
                            ))}
                        </div>
                        <h2 tw="text-2xl font-bold">
                            {frontmatter.title}
                            <Badge tw="ml-3 text-base">{count}</Badge>
                        </h2>
                        <div tw="font-medium text-base" dangerouslySetInnerHTML={{ __html: html }} />
                        <StyledLink to={frontmatter.uri}>Learn more</StyledLink>
                    </div>
                ))}
                <h2 clastwsName="text-base font-bold">
                    <Link tw="underline" to="/all-projects">
                        See all
                    </Link>
                    <Badge tw="ml-3 text-base">{totalCount}</Badge>
                </h2>
            </div>
            <div tw="space-y-8">
                <Title>They trust me</Title>
                <blockquote tw="space-y-10 text-center">
                    <i className="fas fa-quote-right" tw="text-5xl"></i>
                    <p tw="mt-6 text-base font-medium text-white text-justify">
                        Victor was working in my team as an intern in 2019. His task was to prototype some new user interface architecture for our BBj product
                        platform. His ability to understand quickly, combined with his solid knowledge and expertise, allowed him to quickly deliver valuable
                        results which exceeded our expectations. He was able to successfully combine field knowledge of software development practices and
                        architecture with concrete development work in our Java-based BBj environment and in HTML5, JavaScript, and React components in
                        particular. Victor will be an asset for most any professional team that can make use of his energy, high work ethics, and knowledge. He
                        will always find open doors in my team, should our ways ever cross again.
                    </p>
                    <p tw="text-base font-medium">- PhD. Stephan Wald, CEO of Basis Europe Distribution GmbH (Saarbrücken, Germany)</p>
                </blockquote>
            </div>
        </Container>
    )
}

export default Landing
