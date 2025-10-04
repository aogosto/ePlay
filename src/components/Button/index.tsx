import * as B from './styles'

type Props = {
    children: string
}

const Button = ({ children }: Props) => {
    return <B.Container>{children}</B.Container>
}

export default Button
