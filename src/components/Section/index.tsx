import type Game from '../../models/game'
import Card from '../Card'
import * as S from './styles'

export type Props = {
    title?: string
    games: Game[]
}

const Section = ({ title, games }: Props) => {
    return (
        <S.Container title={title}>
            <div className="container">
                <h3>{title}</h3>
                <ul>
                    {games.map((game) => (
                        <Card hero={game.hero} key={game.id}></Card>
                    ))}
                </ul>
            </div>
        </S.Container>
    )
}

export default Section
