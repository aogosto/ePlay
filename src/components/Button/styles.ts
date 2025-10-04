import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.button`
    padding: 0.75rem 1.25rem;
    font-weight: bold;
    background-color: transparent;
    border: 2px solid ${colors.secondary};
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
`
