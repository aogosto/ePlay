import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
    height: 448px;
    display: block;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    padding: 6px; 0 56px 0;

    &::after {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            ${colors.primary} 100%
        );
    }

    .container {
        z-index: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;

        div {
            display: flex;
            justify-content: space-between;

            p {
                display: flex;
                align-items: center;
            }
        }
    }
`

export const Infos = styled.div`
    display: flex;
    padding: 16px;
    align-items: end;
    justify-content: space-between;

    h2 {
        img {
            max-width: 216px;
            height: auto;
        }
    }
`
