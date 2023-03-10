import { StaticImageData } from 'next/image';
import {} from 'next/router'

interface Article {
    id: number,
    title: string,
    category: string,
    date: string,
    img: StaticImageData,
}

interface postByID {
    id: number,
    author: string,
    title: string,
    content: string,
    date: string,
    img: StaticImageData,
}

interface PopularNews {
    id: number,
    img: StaticImageData,
    title: string,
}

export type { Article, PopularNews, postByID };




  