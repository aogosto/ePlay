import type { ReactNode } from 'react'
import * as B from './styles'

type Props = {
    children: ReactNode
    size: 'small' | 'large'
}

const Button = ({ children, size }: Props) => {
    return <B.Container size={size}>{children}</B.Container>
}

export default Button
