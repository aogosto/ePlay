import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
    margin-bottom: 56px;
    .container {
        .components {
            display: flex;
            justify-content: space-evenly;
            margin-bottom: 28px;

            div {
                width: 100%;

                h3 {
                    margin-bottom: 28px;
                }

                ul {
                    li {
                        margin-bottom: 14px;
                    }
                }
            }
        }
        p {
            color: ${colors.tertiary};
        }
    }
`
