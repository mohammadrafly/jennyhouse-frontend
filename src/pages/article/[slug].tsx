import Head from '@/component/head'
import Header from '@/component/header'
import Footer from '@/component/footer'
import { useRouter } from 'next/router'
import Dummy from '@/image/dummy.png'
import Image from 'next/image'
import Link from 'next/link'
import { postByID, PopularNews, Article } from '@/utils/ArticleInterface'


function SinglePost({ post }) {
    const router = useRouter();
    const base_url = 'http://api.pupakindonesia.xyz/uploads/';

    if (router.isFallback) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <Head></Head>
        <Header></Header>
        <div className="bg-white">
          <div className="p-6 lg:px-8 md:flex md:items-center md:justify-between md:p-6 white mx-auto flexmx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-3 place-items-start">
                {post.map(item => (
                  <div
                    key={item.post_slug}
                    className="w-[800px]"
                  >
                    <div className="text-black font-bold text-4xl">{item.title_post}</div>
                    <p className="text-black font-thin pt-1">{item.author} | {item.post_date}</p>
                    <Image
                      src={base_url+item.header_image}
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
                    {post.map(item => (
                      <Link
                        key={item.id}
                        href={`/article/${item.title}`}>
                        <div className="grid grid-rows-1 grid-flow-col pb-2">
                          <div className="bg-white w-[90px] row-span-2">
                            <Image
                              src={base_url+item.header_image}
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
                  {post.map(item => (
                    <Link
                      key={item.title}
                      href={`https://www.jennyhouse.id/cosmetics`}
                      className=""
                    >
                        <Image
                          src={base_url+item.header_image}
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
export async function getServerSideProps({ params }) {
  const res = await fetch(`http://api.pupakindonesia.xyz/api/posts/${params.post_slug}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default SinglePost