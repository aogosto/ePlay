import { Link } from 'react-router-dom'
import Button from '../Button'
import * as B from './styles'
import type Game from '../../models/game'

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
                            <Link to={'/'}>Promoção</Link>
                            <p>{game.description}</p>
                        </div>
                        <Button>40% OFF</Button>
                    </div>
                </B.Container>
            ))}
        </>
    )
}

export default Banner
