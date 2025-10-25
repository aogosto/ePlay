import type Game from '../../models/game'
import Card from '../Card'
import * as S from './styles'

export type Props = {
    title?: string
    games: Game[]
    card: 'small' | 'large'
}

const Section = ({ title, games, card }: Props) => {
    return (
        <S.Container title={title} card={card}>
            <div className="container">
                <h3>{title}</h3>
                <ul>
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
                </ul>
            </div>
        </S.Container>
    )
}

export default Section
