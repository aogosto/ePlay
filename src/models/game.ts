class Game {
    title: string
    hero: string
    logo: string
    description: string
    infos: string[]
    id: number
    rating: string
    price: string

    constructor(
        title: string,
        hero: string,
        logo: string,
        description: string,
        infos: string[],
        id: number,
        rating: string,
        price: string
    ) {
        this.title = title
        this.hero = hero
        this.logo = logo
        this.description = description
        this.id = id
        this.infos = infos
        this.rating = rating
        this.price = price
    }
}

export default Game
