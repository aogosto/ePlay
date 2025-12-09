import { useState } from 'react'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import * as D from './styles'
import type { GalleryItem } from '../Home'

const play = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
    </svg>
)

const zoom = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            fill-rule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
        />
        <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
        <path
            fill-rule="evenodd"
            d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
        />
    </svg>
)

const mock: GalleryItem[] = [
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/Gr5H85CxI58?si=Pfo3mqEGBZRKkOW9',
    },
    {
        type: 'image',
        url: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817190/ss_a240e0c6f37569493ed749d9317718d8ce9f5d18.1920x1080.jpg?t=1763569499',
    },
    {
        type: 'image',
        url: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817190/ss_a240e0c6f37569493ed749d9317718d8ce9f5d18.1920x1080.jpg?t=1763569499',
    },
    {
        type: 'image',
        url: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817190/ss_a240e0c6f37569493ed749d9317718d8ce9f5d18.1920x1080.jpg?t=1763569499',
    },
]

type Props = {
    defaultCover: string
}

interface ModalState extends GalleryItem {
    isVisible: boolean
}

const Details = ({ defaultCover }: Props) => {
    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        type: 'image',
        url: '',
    })

    const getMediaCover = (item: GalleryItem) => {
        if (item.type === 'image') return item.url
        return defaultCover
    }

    const getMediaIcon = (item: GalleryItem) => {
        if (item.type === 'image') return zoom
        return play
    }

    const closeModal = () => {
        setModal({
            isVisible: false,
            type: 'image',
            url: '',
        })
    }

    return (
        <D.Container>
            <Hero></Hero>
            <D.Infos className="container">
                <Section title={'Descrição'}>
                    <p>
                        After the events of Marvel’s Spider-Man Remastered,
                        teenage Miles Morales is adjusting to his new home while
                        following in the footsteps of his mentor, Peter Parker,
                        as a new Spider-Man. When a fierce power struggle
                        threatens to destroy his home, Miles must take up the
                        mantle of Spider-Man and own it.
                    </p>
                </Section>
                <Section title={'Detalhes'}>
                    <p>
                        Genre: Shooter - FPP - Sci-fi <br />
                        Tags: Story Rich, Atmospheric, Sci-fi, Classic, Science,
                        show 8 more... <br />
                        Works on: Windows (7, 8, 10, 11)
                        <br />
                        Release date: September 16, 2016
                        <br />
                        Company: 2K Marin, 2K China, Digital Extremes, 2K
                        Australia, Blind Squirrel / 2K Games
                        <br />
                        Links: Forum discussion <br />
                    </p>
                </Section>
            </D.Infos>
            <Section title={'Galeria'}>
                <ul>
                    {mock.map((media) => (
                        <li
                            key={media.url}
                            onClick={() => {
                                setModal({
                                    isVisible: true,
                                    type: media.type,
                                    url: media.url,
                                })
                            }}
                        >
                            <img src={getMediaCover(media)}></img>
                            <div>{getMediaIcon(media)}</div>
                        </li>
                    ))}
                </ul>
            </Section>
            <D.Modal className={modal.isVisible ? 'visible' : ''}>
                <div className="container">
                    <header>
                        <h4>Spider Man</h4>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            onClick={() => {
                                closeModal()
                            }}
                        >
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </header>
                    {modal.type === 'image' ? (
                        <img src={modal.url}></img>
                    ) : (
                        <iframe src={modal.url}></iframe>
                    )}
                </div>
                <div
                    className="overlay"
                    onClick={() => {
                        closeModal()
                    }}
                ></div>
            </D.Modal>
        </D.Container>
    )
}

export default Details
