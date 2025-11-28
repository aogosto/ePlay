import Button from '../Button'
import Tag from '../Tag'
import * as H from './styles'

const Hero = () => {
    return (
        <H.Container
            style={{
                backgroundImage: `url(https://shared.steamstatic.com/store_item_assets/steam/apps/1817190/library_hero_2x.jpg?t=1750955016)`,
            }}
        >
            <div className="container">
                <div>
                    <div>
                        <Tag link={''} size={'small'}>
                            Ação
                        </Tag>
                        <Tag link={''} size={'small'}>
                            Aventura
                        </Tag>
                    </div>
                    <p className="small">4.3</p>
                </div>
                <H.Infos>
                    <h2>
                        <img
                            src="https://shared.steamstatic.com/store_item_assets/steam/apps/1817190/logo_2x.png?t=1750955016"
                            alt="Marvel's Spider-Man: Miles"
                        />
                    </h2>
                    <Button size={'large'}>R$ 199,90</Button>
                </H.Infos>
            </div>
        </H.Container>
    )
}

export default Hero
