import type Game from '../../models/game'
import Card from '../Card'
import { Container } from './styles'

export type Props = {
    games: Game[]
    card: 'small' | 'large'
}

const List = ({ games, card }: Props) => {
    return (
        <Container card={card}>
            {' '}
            {games.map((game) => (
                <Card
                    hero={game.hero}
                    key={game.id}
                    card={card}
                    infos={game.infos}
                    title={game.title}
                    rating={game.rating}
                    price={game.price}
                ></Card>
            ))}
        </Container>
    )
}

export default List
