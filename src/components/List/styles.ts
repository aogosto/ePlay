import styled from 'styled-components'
import type { Props } from '.'

export const Container = styled.ul<Omit<Props, 'games' | 'title'>>`
    display: grid;
    grid-template-columns: ${(props) =>
        props.card === 'small' ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)'};
    grid-gap: 16px;
`
