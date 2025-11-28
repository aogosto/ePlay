import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.button<{ size: 'small' | 'large' }>`
    padding: ${({ size }) =>
        size === 'small' ? '0.5rem 1rem' : '0.75rem 1.25rem'};
    font-weight: bold;
    background-color: transparent;
    border: 2px solid ${colors.tertiary};
    border-radius: 6px;
    font-size: ${({ size }) => (size === 'small' ? '12px' : '14px')};
    cursor: pointer;
    display: flex;

    color: ${colors.tertiary};

    &:hover {
        color: ${colors.secondary};
        border: 2px solid ${colors.secondary};
    }
`
