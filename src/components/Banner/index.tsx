import Button from '../Button'
import * as B from './styles'
import type Game from '../../models/game'
import Tag from '../Tag'

type Props = {
    games: Game[]
}

const Banner = ({ games }: Props) => {
    return (
        <>
            {games.map((game) => (
                <B.Container
                    style={{
                        backgroundImage: `url(${game.hero})`,
                    }}
                >
                    <div className="container">
                        <div>
                            <h2>
                                <img src={game.logo} alt={game.title} />
                            </h2>
                            <Tag link={'/deals'} size={'small'}>
                                Promoção
                            </Tag>
                            <p>{game.description}</p>
                        </div>
                        <Button size={'large'}>R$ 199,90</Button>
                    </div>
                </B.Container>
            ))}
        </>
    )
}

export default Banner
