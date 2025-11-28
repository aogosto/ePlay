import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
    & > section {
        ul {
            overflow: auto;
            white-space: nowrap;
            display: flex;

            li {
                position: relative;
                margin-right: 8px;

                div {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: ${colors.primary};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                }

                &:hover {
                    div {
                        opacity: 0.72;
                        cursor: pointer;
                    }
                }

                img {
                    border: 2px solid ${colors.secondary};
                    border-radius: 6px;
                    width: 304px;
                    object-fit: cover;
                }
            }
        }
    }
`

export const Infos = styled.div`
    display: flex;

    & > section {
        margin-right: 16px;
    }

    div {
        padding: 0;
    }
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        position: relative;
        z-index: 1;
        max-width: 960px;

        header {
            display: flex;
            margin-bottom: 24px;
            justify-content: space-between;
        }

        img {
            display: block;
            max-width: 100%;
        }
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${colors.primary};
        opacity: 0.72;
    }
`
