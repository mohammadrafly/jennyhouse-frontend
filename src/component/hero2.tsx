import Dummy from '@/image/dummy.png'
import { Article } from '@/utils/ArticleInterface'
import Image from 'next/image'
import Link from 'next/link'
import HeroCard from './card_hero'

export default function hero2() {
    const article: Article[] = [
        {
            id: 1,
            img: Dummy,
            category: 'test',
            date: '',
            title: 'asede tawdasdw asd wamglmklsmkaskmas'
        },
        {
            id: 2,
            img: Dummy,
            category: 'test',
            date: '',
            title: 'asede tawdasdw asd wamglmklsmkaskmas'
        },
        {
            id: 3,
            img: Dummy,
            category: 'test',
            date: '',
            title: 'asede tawdasdw asd wamglmklsmkaskmas'
        }
    ]

    return (
        <>
            <div>
                <div className="bg-white">
                    <div className="mx-auto flex max-w-7xl p-6 pt-5 lg:px-8 relative isolate overflow-hidden items-center justify-center rounded-lg">
                        {article.slice(0, 1).map(item => (
                            <Link 
                                key={item.title}
                                href={`/article/${item.title}`}
                            >
                                <div className="relative group rounded-lg hover:opacity-90 bg-black mr-10 transition-opacity duration-300 opacity-100">
                                    <Image
                                        src={Dummy}
                                        alt="dummy.png"
                                        className="object-cover z-0 box-content h-[580px] w-[800px] rounded-lg"
                                    />
                                    <span className="absolute bg-gradient-to-bl from-gray-900 via-transparent"></span>
                                    <span className="absolute bg-gradient-to-tr from-gray-900 via-transparent"></span>
                                    <div className="absolute inset-0 flex items-center justify-items-start z-20">
                                        <p className="transform transition hover:scale-110 text-white font-bold text-4xl mt-auto pl-4 pb-4 rounded-lg">{item.title}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                                                {article.slice(0, 1).map(item => (
                            <Link 
                                key={item.title}
                                href={`/article/${item.title}`}
                            >
                                <div className="relative group rounded-lg hover:opacity-90 bg-black mr-10 transition-opacity duration-300 opacity-100">
                                    <Image
                                        src={Dummy}
                                        alt="dummy.png"
                                        className="object-cover z-0 box-content h-[580px] w-[800px] rounded-lg"
                                    />
                                    <span className="absolute bg-gradient-to-bl from-gray-900 via-transparent"></span>
                                    <span className="absolute bg-gradient-to-tr from-gray-900 via-transparent"></span>
                                    <div className="absolute inset-0 flex items-center justify-items-start z-20">
                                        <p className="transform transition hover:scale-110 text-white font-bold text-4xl mt-auto pl-4 pb-4 rounded-lg">{item.title}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        
                    </div>
                </div>
            </div>
        </>
    )
}