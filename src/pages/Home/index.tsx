import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import List from '../../components/List'
import Section from '../../components/Section'
import deals from '../../../api/deals.json'
export interface GalleryItem {
    type: 'image' | 'video'
    url: string
}

export type Game = {
    id: number
    name: string
    description: string
    release_date?: string
    rating: number
    prices: {
        discount?: number
        old?: number
        current?: number
    }
    details: {
        category: string
        system: string
        publisher: string
        languages: string[]
    }
    media: {
        thumbnail: string
        header: string
        capsule: string
        hero: string
        logo: string
        icon: string
        gallery: GalleryItem[]
    }
}

const Home = () => {
    const [deals, setDeals] = useState<Game[]>([])
    const [soon, setSoon] = useState<Game[]>([])

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/aogosto/ePlay/refs/heads/main/api/deals.json'
        )
            .then((res) => res.json())
            .then((res) => setDeals(res))
    }, [])

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/eplay/em-breve')
            .then((res) => res.json())
            .then((res) => setSoon(res))
    }, [])

    return (
        <>
            <Banner games={deals}></Banner>
            <Section title={'Promoções'}>
                <List games={deals} card={'small'}></List>
            </Section>
            <Section title={'Em Breve'}>
                <List games={soon} card={'large'}></List>
            </Section>
        </>
    )
}

export default Home
