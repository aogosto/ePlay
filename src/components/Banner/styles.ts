import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 448px;
    padding: 56px 0;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            ${colors.primary} 100%
        );
        z-index: 1; /* Place the overlay above the background but below the content */
    }

    .container {
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: end;
        position: relative;
        z-index: 2;

        div {
            max-width: 432px;

            h2 {
                img {
                    max-width: 216px;
                    height: auto;
                }
            }

            a {
                padding: 8px 0;
                display: inline-block;
                font-weight: bold;
                text-transform: uppercase;
            }
        }
    }
`
