import type { Game } from '../../pages/Home'
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
                <Card key={game.id} card={card} games={games} />
            ))}
        </Container>
    )
}

export default List
