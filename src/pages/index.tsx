import Header from '@/component/header'
import Footer from '@/component/footer'
import Hero from '@/component/hero'
import Head from '@/component/head'
import { Article, PopularNews} from '@/utils/ArticleInterface'
import Dummy from '@/image/dummy.png'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const article: Article[] = [
    {
      id: 1,
      img: Dummy,
      title: "judul-blog-yang-akan-di-fetch-oleh-axios-dari-next-js-ke-laravel-endpoint", 
      category: "Kategori",
      date: '9 Desember 2025'
    },
    {
      id: 2,
      img: Dummy,
      title: "contoh judul 2", 
      category: "Kategori",
      date: '9 Desember 2025'
    },
  ]

  const populerNews: PopularNews[] = [
    {
      id: 1,
      img: Dummy,
      title: 'Judul blog yang akan di fetch oleh axios dari next js ke laravel endpoint'
    },
    {
      id: 2,
      img: Dummy,
      title: 'tutorial menjadi programmer handal'
    },
    {
      id: 3,
      img: Dummy,
      title: 'cara konversi dosa ke xp coc'
    },
    {
      id: 4,
      img: Dummy,
      title: 'tutorial menjadi kucing.exe'
    },
  ]

  return (
    <>
      <Head></Head>
      <Header></Header>
        <Hero></Hero>
        <div className="bg-white">
          <div className="p-6 lg:px-8 md:flex md:items-center md:justify-between md:p-6 white mx-auto flexmx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-2 place-items-start">
                <ul className="w-96">
                  <li>
                    <h1 className="text-3xl font-bold text-red-300 mb-2">Blog Terkini</h1>
                    <div className="pb-3">
                      <div className="bg-red-300 w-[800px] h-1"></div>
                    </div>
                    {article.map(item => (
                      <Link 
                        key={item.title}
                        href={`/article/${item.title}`}>
                        <div className="grid grid-cols-2 w-[800px]">
                          <Image
                            src={Dummy}
                            alt="dummy.png"
                            className="box-content rounded-lg h-[240px] w-[352px] m-1 bg-gray-300 hover:bg-gray-500 rounded" />
                          <div className="text-black pt-2">
                            <h1 className="text-black font-bold text-2xl pb-3">{item.title}</h1>
                              {item.category}
                            <p className="text-black font-extralight pt-5">{item.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                    <Link
                      href={`/blog-terkini`}
                    >
                      <div className="pt-5 pb-5 flex justify-self-start">
                        <div className="border-2 pb-3 pt-3 pr-10 pl-10 border-red-300 bg-white hover:bg-red-200 rounded-full text-red-300 duration-300">
                          <button type="button" className="text-xl font-medium leading-6 text-red-300 hover:text-white duration-300">Lihat Lebih Banyak</button>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <h1 className="text-3xl font-bold text-red-300 mb-2 mt-10">Review</h1>
                    <div className="pb-3">
                      <div className="bg-red-300 w-[800px] h-1"></div>
                    </div>
                    {article.map(item => (
                      <Link 
                        key={item.title}
                        href={`/article/${item.title}`}>
                        <div className="grid grid-cols-2 w-[800px]">
                          <Image
                            src={Dummy}
                            alt="dummy.png"
                            className="box-content rounded-lg h-[240px] w-[352px] m-1 bg-gray-300 hover:bg-gray-500 rounded" />
                          <div className="text-black pt-2">
                            <h1 className="text-black font-bold text-2xl pb-3">{item.title}</h1>
                              {item.category}
                            <p className="text-black font-extralight pt-5">{item.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                    <Link
                      href={`/review`}
                    >
                      <div className="pt-5 pb-5 flex justify-self-start">
                        <div className="border-2 pb-3 pt-3 pr-10 pl-10 border-red-300 bg-white hover:bg-red-200 rounded-full text-red-300 duration-300">
                          <button type="button" className="text-xl font-medium leading-6 text-red-300 hover:text-white duration-300">Lihat Lebih Banyak</button>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <h1 className="text-3xl font-bold text-red-300 mb-2 mt-10">Tips & Tutorial</h1>
                    <div className="pb-3">
                      <div className="bg-red-300 w-[800px] h-1"></div>
                    </div>
                    {article.map(item => (
                      <Link 
                        key={item.title}
                        href={`/article/${item.title}`}>
                        <div className="grid grid-cols-2 w-[800px]">
                          <Image
                            src={Dummy}
                            alt="dummy.png"
                            className="box-content rounded-lg h-[240px] w-[352px] m-1 bg-gray-300 hover:bg-gray-500 rounded" />
                          <div className="text-black pt-2">
                            <h1 className="text-black font-bold text-2xl pb-3">{item.title}</h1>
                              {item.category}
                            <p className="text-black font-extralight pt-5">{item.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                    <Link
                      href={`/tipsdantutorial`}
                    >
                      <div className="pt-5 pb-5 flex justify-self-start">
                        <div className="border-2 pb-3 pt-3 pr-10 pl-10 border-red-300 bg-white hover:bg-red-200 duration-300 rounded-full text-red-300">
                          <button type="button" className="text-xl font-medium leading-6 text-red-300 hover:text-white duration-300">Lihat Lebih Banyak</button>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="grid gird-cols-1 place-items-start pl-[16rem]">
                <ul>
                  <li>
                    <h1 className="text-3xl pb-5 font-bold text-red-300 underline underline-offset-8 mb-5">Blog Populer</h1>
                    {populerNews.map(item => (
                      <Link
                        key={item.id}
                        href={`/article/${item.title}`}>
                        <div className="grid grid-rows-1 grid-flow-col pb-2">
                          <div className="bg-white w-[90px] row-span-2">
                            <Image 
                              src={item.img}
                              alt="dummy.png"
                              className="box-content h-[75px] w-[75px] rounded-lg bg-gray-300 hover:bg-gray-500 rounded"
                            />
                          </div>
                          <h1 className="content-center text-black font-black col-span-2">
                            {item.title}
                          </h1>
                        </div>
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      <Footer></Footer>
    </>
  )
}
