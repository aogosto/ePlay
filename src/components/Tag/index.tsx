import * as T from './styles'

type Props = {
    children: string
}

const Tag = ({ children }: Props) => {
    return <T.Container>{children}</T.Container>
}

export default Tag
