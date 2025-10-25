import Button from '../Button'
import Tag from '../Tag'
import * as C from './styles'

export type Props = {
    hero: string
    card: 'small' | 'large'
    infos: string[]
    title: string
    rating: string
    price: string
}

const Card = ({ hero, card, infos, title, rating, price }: Props) => {
    return (
        <C.Container card={card}>
            <img src={hero} alt="" />
            <div>
                <C.Header>
                    <h2 className="x-small">{title}</h2>
                    <p className="x-small">{rating}</p>
                </C.Header>
                <C.Main>
                    <div>
                        {infos.map((info) => (
                            <Tag key={info} link={'/deals'} size={'x-small'}>
                                {info}
                            </Tag>
                        ))}
                    </div>
                    <Button size={'small'}>{price}</Button>
                </C.Main>
            </div>
            <C.Timer card={card}>
                <h1>00:00:00</h1>
            </C.Timer>
        </C.Container>
    )
}

export default Card
