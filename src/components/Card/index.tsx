import * as C from './styles'

export type Props = {
    hero: string
}

const Card = ({ hero }: Props) => {
    return (
        <C.Container
            style={{
                backgroundImage: `url(${hero})`,
            }}
        >
            <h2>
                <img src="" alt="" />
            </h2>
            
        </C.Container>
    )
}

export default Card
