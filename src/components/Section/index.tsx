import type { ReactNode } from 'react'
import * as S from './styles'

export type Props = {
    title: string
    children: ReactNode
}

const Section = ({ title, children }: Props) => {
    return (
        <S.Container title={title}>
            <div className="container">
                <h3>{title}</h3>
                <div>{children}</div>
            </div>
        </S.Container>
    )
}

export default Section
