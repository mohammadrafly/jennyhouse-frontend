import Head from '@/component/head'
import Header from '@/component/header'
import Footer from '@/component/footer'
import { useRouter } from 'next/router'
import Dummy from '@/image/dummy.png'
import Image from 'next/image'
import Link from 'next/link'
import { postByID, PopularNews, Article } from '@/utils/ArticleInterface'


export default function SinglePost() {
    const router = useRouter();
    const { id } = router.query;
    //bayangkan anda sudah membarikan fetch post per id
    const items: postByID[] = [
      {
        id: 1,
        author: "Ferdi Sambo",
        date: "9 Maret 2023",
        img: Dummy,
        title: "judul-blog-yang-akan-di-fetch-oleh-axios-dari-next-js-ke-laravel-endpoint", 
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad 
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
        quasi aliquam eligendi, placeat qui corporis!`
      },
    ];

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

    return (
      <>
        <Head></Head>
        <Header></Header>
        <div className="bg-white">
          <div className="p-6 lg:px-8 md:flex md:items-center md:justify-between md:p-6 white mx-auto flexmx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-3 place-items-start">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="w-[800px]"
                  >
                    <div className="text-black font-bold text-4xl">{item.title}</div>
                    <p className="text-black font-thin pt-1">{item.author} | {item.date}</p>
                    <Image
                      src={Dummy}
                      alt="dummy.png"
                      className="rounded-lg" />
                    <p className="text-black pt-10">{item.content}</p>
                  </div>
                ))}
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
                              className="box-content h-[75px] w-[75px] rounded-lg bg-gray-300 hover:bg-gray-500 rounded" />
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
          <div className="p-6 lg:px-8 md:flex md:items-center md:justify-between md:p-6 white mx-auto flexmx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <ul className="w-96">
              <li>
                <h1 className="text-3xl font-bold text-black mb-2 w-[800px] pb-3">Rekomendasi Produk Haircare untuk Rambut Kusut dan Kering</h1>
                <div className="grid grid-cols-2 gap-5 w-[800px]">
                  {article.map(item => (
                    <Link
                      key={item.title}
                      href={`https://www.jennyhouse.id/cosmetics`}
                      className=""
                    >
                        <Image
                          src={Dummy}
                          alt="dummy.png"
                          className="box-content rounded-lg h-[240px] w-[352px] m-1 bg-gray-300 hover:bg-gray-500 rounded" 
                        />
                        <div className="text-black pt-2">
                          <h1 className="text-black font-bold text-2xl pb-3">{item.title}</h1>
                            {item.category}
                          <p className="text-black font-extralight pt-5">{item.date}</p>
                        </div>
                        
                        <div className="pt-5 pb-5 flex justify-self-start">
                          <div className="border-2 pb-3 pt-3 pr-10 pl-10 border-red-300 bg-white hover:bg-red-200 rounded-full text-red-300 duration-300">
                            <button type="button" className="text-xl font-medium leading-6 text-red-300 hover:text-white duration-300">Buy Now</button>
                          </div>
                        </div>
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Footer></Footer>
      </>
    )
}