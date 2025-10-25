import Banner from '../../components/Banner'
import Section from '../../components/Section'
import type Game from '../../models/game'

const Home = () => {
    const banner: Game[] = [
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/1817190/library_hero_2x.jpg?t=1750955016',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/1817190/logo_2x.png?t=1750955016',
            title: "Marvel's Spider-Man: Miles Morales",
            description:
                'After the events of Marvel’s Spider-Man Remastered, teenage Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. When a fierce power struggle threatens to destroy his home, Miles must take up the mantle of Spider-Man and own it',
            id: 1,
            infos: [],
            rating: '0',
            price: '0',
        },
    ]

    const deals: Game[] = [
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg?t=1750955016',
            id: 1,
            title: "Marvel's Spider-Man: Miles Morales",
            logo: '',
            description: '',
            infos: ['Ação', 'Aventura'],
            rating: '9.3',
            price: 'R$ 199,90',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg?t=1750955016',
            id: 2,
            title: "Marvel's Spider-Man: Miles Morales",
            logo: '',
            description: '',
            infos: ['Ação', 'Aventura'],
            rating: '9.3',
            price: 'R$ 199,90',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg?t=1750955016',
            id: 3,
            title: "Marvel's Spider-Man: Miles Morales",
            logo: '',
            description: '',
            infos: ['Ação', 'Aventura'],
            rating: '9.3',
            price: 'R$ 199,90',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg?t=1750955016',
            id: 4,
            title: "Marvel's Spider-Man: Miles Morales",
            logo: '',
            description: '',
            infos: ['Ação', 'Aventura'],
            rating: '9.3',
            price: 'R$ 199,90',
        },
    ]

    const soon: Game[] = [
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/1817190/library_hero_2x.jpg?t=1750955016',
            id: 4,
            title: "Marvel's Spider-Man: Miles Morales",
            logo: '',
            description: '',
            infos: ['Ação', 'Aventura'],
            rating: '0',
            price: '0',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/1817190/library_hero_2x.jpg?t=1750955016',
            id: 5,
            title: "Marvel's Spider-Man: Miles Morales",
            logo: '',
            description: '',
            infos: ['Ação', 'Aventura'],
            rating: '0',
            price: '0',
        },
    ]

    return (
        <>
            <Banner games={banner}></Banner>
            <Section games={deals} title="Promoções" card={'small'}></Section>
            <Section games={soon} title="Em Breve" card={'large'}></Section>
        </>
    )
}

export default Home
