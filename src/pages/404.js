import 'twin.macro'
import React from 'react'
import { Link } from 'gatsby'
import { MainLayout } from '../components/layouts'
import { Container } from '../components/atoms'

const NotFoundPage = () => {
    return (
        <MainLayout>
            <Container>
                <span tw="text-4xl font-bold">
                    😔 404 Error, I don't know that page!{' '}
                    <Link tw="text-primary-500" to="/">
                        Go to index
                    </Link>
                </span>
            </Container>
        </MainLayout>
    )
}

export default NotFoundPage
