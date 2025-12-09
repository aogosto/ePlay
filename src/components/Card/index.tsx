import type { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import * as C from './styles'

export type Props = {
    games: Game[]
    card: 'small' | 'large'
}

const Card = ({ games, card }: Props) => {
    const formatPrices = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(price)
    }

    const getGameTags = (game: Game) => {
        const tags = []

        if (game.release_date) {
            tags.push(game.release_date)
        }

        if (game.prices.discount) {
            tags.push(`${game.prices.discount}%`)
        }

        if (game.prices.current) {
            tags.push(formatPrices(game.prices.current))
        }

        return tags
    }

    return (
        <>
            {games.map((game) => (
                <C.Container card={card}>
                    <img src={game.media.thumbnail} alt="" />
                    <div>
                        <C.Header>
                            <h2 className="x-small">{game.name}</h2>
                            <p className="x-small">{game.rating}</p>
                        </C.Header>
                        <C.Main>
                            <div>
                                <Tag link={'/deals'} size={'x-small'}>
                                    {getGameTags(game)}
                                </Tag>
                            </div>
                            <Button size={'small'}>
                                {game.prices.current}
                            </Button>
                        </C.Main>
                    </div>
                    <C.Timer card={card}>
                        <h1>{game.release_date}</h1>
                    </C.Timer>
                </C.Container>
            ))}
        </>
    )
}

export default Card
