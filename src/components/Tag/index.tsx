import * as T from './styles'

export type Props = {
    children: string
    link: string
    size: 'small' | 'x-small'
}

const Tag = ({ children, link, size }: Props) => {
    return (
        <T.Container to={link} size={size}>
            {children}
        </T.Container>
    )
}

export default Tag
