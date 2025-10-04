class Game {
    title: string
    hero: string
    logo: string
    description: string
    id: number

    constructor(
        title: string,
        hero: string,
        logo: string,
        description: string,
        id: number
    ) {
        this.title = title
        this.hero = hero
        this.logo = logo
        this.description = description
        this.id = id
    }
}

export default Game
