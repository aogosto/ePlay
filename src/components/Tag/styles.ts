import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)<{ size: 'small' | 'x-small' }>`
    padding: 8px 0;
    padding-right: 8px;
    display: inline-block;
    font-weight: bold;
    text-transform: uppercase;
    font-size: ${(props) => (props.size === 'small' ? 'small' : 'x-small')};
`
