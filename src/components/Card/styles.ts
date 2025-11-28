import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
`

export const Main = styled.main`
    margin-top: 16px;
    display: flex;
    justify-content: space-between;

    button {
        height: 100%;
    }

    div {
        display: flex;
        flex-wrap: wrap;
    }
`

export const Timer = styled.div<{ card: 'small' | 'large' }>`
    position: absolute;
    left: 0;
    right: 0;
    top: 35%;
    margin-inline: auto;
    width: fit-content;
`

export const Container = styled.li<{ card: 'small' | 'large' }>`
    border-radius: 6px;
    border: 1px solid ${colors.secondary};
    position: relative;

    img {
        width: 100%;
        height: auto;
        position: contain;
        border-radius: 6px;
    }

    div {
        padding: 8px;
        display: ${(props) => (props.card === 'small' ? 'inherit' : 'none')};

        div {
            padding: 0;
        }
    }

    ${Timer} {
        display: ${(props) => (props.card === 'large' ? 'inherit' : 'none')};
    }
`
