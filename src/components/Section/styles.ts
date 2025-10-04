import styled from 'styled-components'
import type { Props } from '.'

export const Container = styled.section<Omit<Props, 'games'>>`
    padding: 56px 0;
    .container {
        h3 {
            margin-bottom: 28px;
        }
        ul {
            display: grid;
            grid-template-columns: ${(props) =>
                props.title === 'Promoções'
                    ? 'repeat(3, 1fr)'
                    : 'repeat(2, 1fr)'};
            grid-gap: 16px;
        }
    }
`
