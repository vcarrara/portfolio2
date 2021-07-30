import tw, { styled } from 'twin.macro'

const Title = styled.h1`
    ${tw`text-4xl font-bold relative ml-4`}
    &::before {
        content: '';
        ${tw`absolute top-0 -left-4 w-1 h-full bg-primary-500`}
    }
`
export default Title
