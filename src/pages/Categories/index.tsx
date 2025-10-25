import Section from '../../components/Section'
import type Game from '../../models/game'

const Categories = () => {
    const rpg: Game[] = [
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg?t=1753715750',
            id: 1,
            title: 'The Elder Scrolls V: Skyrim - Special Edition',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/489830/logo.png?t=1753715750',
            description:
                'Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features.',
            infos: ['RPG'],
            rating: '9.4',
            price: 'R$ 149,90',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg?t=1753715750',
            id: 2,
            title: 'The Elder Scrolls V: Skyrim - Special Edition',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/489830/logo.png?t=1753715750',
            description:
                'Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features.',
            infos: ['RPG'],
            rating: '9.4',
            price: 'R$ 149,90',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg?t=1753715750',
            id: 3,
            title: 'The Elder Scrolls V: Skyrim - Special Edition',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/489830/logo.png?t=1753715750',
            description:
                'Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features.',
            infos: ['RPG'],
            rating: '9.4',
            price: 'R$ 149,90',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg?t=1753715750',
            id: 4,
            title: 'The Elder Scrolls V: Skyrim - Special Edition',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/489830/logo.png?t=1753715750',
            description:
                'Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features.',
            infos: ['RPG'],
            rating: '9.4',
            price: 'R$ 149,90',
        },
    ]

    const action: Game[] = [
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/3240220/header_2x.jpg?t=1753974917',
            id: 1,
            title: 'Grand Theft Auto V Enhanced',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/3240220/b45f1fc647bfb9389a2c741686627ef7e139f2df/logo_2x.png?t=1753974917',
            description:
                'Experience entertainment blockbusters Grand Theft Auto V and Grand Theft Auto Online — now upgraded for a new generation with stunning visuals, faster loading, 3D audio, and more, plus exclusive content for GTA Online players.',
            infos: ['Ação'],
            rating: '7.4',
            price: 'R$ 224,90',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/3240220/header_2x.jpg?t=1753974917',
            id: 2,
            title: 'Grand Theft Auto V Enhanced',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/3240220/b45f1fc647bfb9389a2c741686627ef7e139f2df/logo_2x.png?t=1753974917',
            description:
                'Experience entertainment blockbusters Grand Theft Auto V and Grand Theft Auto Online — now upgraded for a new generation with stunning visuals, faster loading, 3D audio, and more, plus exclusive content for GTA Online players.',
            infos: ['Ação'],
            rating: '7.4',
            price: 'R$ 224,90',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/3240220/header_2x.jpg?t=1753974917',
            id: 3,
            title: 'Grand Theft Auto V Enhanced',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/3240220/b45f1fc647bfb9389a2c741686627ef7e139f2df/logo_2x.png?t=1753974917',
            description:
                'Experience entertainment blockbusters Grand Theft Auto V and Grand Theft Auto Online — now upgraded for a new generation with stunning visuals, faster loading, 3D audio, and more, plus exclusive content for GTA Online players.',
            infos: ['Ação'],
            rating: '7.4',
            price: 'R$ 224,90',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/3240220/header_2x.jpg?t=1753974917',
            id: 4,
            title: 'Grand Theft Auto V Enhanced',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/3240220/b45f1fc647bfb9389a2c741686627ef7e139f2df/logo_2x.png?t=1753974917',
            description:
                'Experience entertainment blockbusters Grand Theft Auto V and Grand Theft Auto Online — now upgraded for a new generation with stunning visuals, faster loading, 3D audio, and more, plus exclusive content for GTA Online players.',
            infos: ['Ação'],
            rating: '7.4',
            price: 'R$ 224,90',
        },
    ]

    const adventure: Game[] = [
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/753640/header.jpg?t=1660850427',
            id: 1,
            title: 'Outer Wilds',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/753640/logo_2x.png?t=1660850427',
            description:
                'Named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is a critically-acclaimed and award-winning open world mystery about a solar system trapped in an endless time loop.',
            infos: ['Aventura'],
            rating: '9.5',
            price: 'R$ 67,99',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/753640/header.jpg?t=1660850427',
            id: 2,
            title: 'Outer Wilds',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/753640/logo_2x.png?t=1660850427',
            description:
                'Named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is a critically-acclaimed and award-winning open world mystery about a solar system trapped in an endless time loop.',
            infos: ['Aventura'],
            rating: '9.5',
            price: 'R$ 67,99',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/753640/header.jpg?t=1660850427',
            id: 3,
            title: 'Outer Wilds',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/753640/logo_2x.png?t=1660850427',
            description:
                'Named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is a critically-acclaimed and award-winning open world mystery about a solar system trapped in an endless time loop.',
            infos: ['Aventura'],
            rating: '9.5',
            price: 'R$ 67,99',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/753640/header.jpg?t=1660850427',
            id: 4,
            title: 'Outer Wilds',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/753640/logo_2x.png?t=1660850427',
            description:
                'Named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is a critically-acclaimed and award-winning open world mystery about a solar system trapped in an endless time loop.',
            infos: ['Aventura'],
            rating: '9.5',
            price: 'R$ 67,99',
        },
    ]

    const fps: Game[] = [
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/379720/header.jpg?t=1750784842',
            id: 1,
            title: 'Doom (2016)',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/379720/logo_2x.png?t=1750784842',
            description:
                'Now includes all three premium DLC packs (Unto the Evil, Hell Followed, and Bloodfall), maps, modes, and weapons, as well as all feature updates including Arcade Mode, Photo Mode, and the latest Update 6.66, which brings further multiplayer improvements as well as revamps multiplayer progression.',
            infos: ['FPS'],
            rating: '9.5',
            price: 'R$ 61,50',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/379720/header.jpg?t=1750784842',
            id: 2,
            title: 'Doom (2016)',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/379720/logo_2x.png?t=1750784842',
            description:
                'Now includes all three premium DLC packs (Unto the Evil, Hell Followed, and Bloodfall), maps, modes, and weapons, as well as all feature updates including Arcade Mode, Photo Mode, and the latest Update 6.66, which brings further multiplayer improvements as well as revamps multiplayer progression.',
            infos: ['FPS'],
            rating: '9.5',
            price: 'R$ 61,50',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/379720/header.jpg?t=1750784842',
            id: 3,
            title: 'Doom (2016)',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/379720/logo_2x.png?t=1750784842',
            description:
                'Now includes all three premium DLC packs (Unto the Evil, Hell Followed, and Bloodfall), maps, modes, and weapons, as well as all feature updates including Arcade Mode, Photo Mode, and the latest Update 6.66, which brings further multiplayer improvements as well as revamps multiplayer progression.',
            infos: ['FPS'],
            rating: '9.5',
            price: 'R$ 61,50',
        },
        {
            hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/379720/header.jpg?t=1750784842',
            id: 4,
            title: 'Doom (2016)',
            logo: 'https://shared.steamstatic.com/store_item_assets/steam/apps/379720/logo_2x.png?t=1750784842',
            description:
                'Now includes all three premium DLC packs (Unto the Evil, Hell Followed, and Bloodfall), maps, modes, and weapons, as well as all feature updates including Arcade Mode, Photo Mode, and the latest Update 6.66, which brings further multiplayer improvements as well as revamps multiplayer progression.',
            infos: ['FPS'],
            rating: '9.5',
            price: 'R$ 61,50',
        },
    ]

    return (
        <>
            <Section games={rpg} title="RPG" card={'small'}></Section>
            <Section games={action} title="Ação" card={'small'}></Section>
            <Section
                games={adventure}
                title="Aventura"
                card={'small'}
            ></Section>
            <Section games={fps} title="FPS" card={'small'}></Section>
        </>
    )
}

export default Categories
