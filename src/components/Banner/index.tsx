import Button from '../Button'
import * as B from './styles'
import type { Game } from '../../pages/Home'
import Tag from '../Tag'

type Props = {
    games: Game[]
}

const Banner = ({ games }: Props) => {
    const formatPrices = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(price)
    }

    return (
        <>
            {games.map((game) => (
                <B.Container
                    style={{
                        backgroundImage: `url(${game.media.hero})`,
                    }}
                >
                    <div className="container">
                        <div>
                            <h2>
                                <img src={game.media.logo} alt={game.name} />
                            </h2>
                            <Tag link={'/deals'} size={'small'}>
                                Promoção
                            </Tag>
                            <p>{game.description}</p>
                        </div>
                        <Button size={'large'}>
                            {formatPrices(game.prices.current || 0)}
                        </Button>
                    </div>
                </B.Container>
            ))}
        </>
    )
}

export default Banner
