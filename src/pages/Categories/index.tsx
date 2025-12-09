import Section from '../../components/Section'
import type { Game } from '../Home'

const Categories = () => {
    const rpg: Game[] = []

    const action: Game[] = []

    const adventure: Game[] = []

    const fps: Game[] = []

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
