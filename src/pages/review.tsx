import Head from '@/component/head'
import Header from '@/component/header'
import Footer from '@/component/footer'
import Link from 'next/link'
import Dummy from '@/image/dummy.png'
import Image from 'next/image'

export default function Review() {
  const items = [
    { 
      id: 1, 
      img: Dummy,
      title: "judul-blog-yang-akan-di-fetch-oleh-axios-dari-next-js-ke-laravel-endpoint", 
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum!`
    },
    { 
      id: 2, 
      title: "Second item",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum!`
    },
    { 
      id: 3, 
      title: "Third item",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum!`
    }
  ]
  //fetch article by category

    return (
      <>
        <Head></Head>
        <Header></Header>
        <div className="bg-white">
          <div className="p-6 lg:px-8 md:flex md:items-center md:justify-between md:p-6 white mx-auto flexmx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-3 place-items-start">
                <ul className="w-96">
                  <li>
                    <h1 className="text-xl font-bold text-black underline underline-offset-8 mb-5">Review</h1>
                    {items.map(item => (
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
                            {item.content}
                            <p className="text-black font-extralight pt-5"> 9 Maret 2023</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
              <div className="grid gird-cols-1 place-items-start pl-[16rem]">
                <ul>
                  <li>
                    <h1 className="text-xl font-bold text-black underline underline-offset-8 mb-5">Blog Populer</h1>
                    <a href="#link-blog">
                      <div className="grid grid-rows-1 grid-flow-col pb-2">
                        <div className="bg-white w-[90px] row-span-2">
                          <div className="box-content h-[75px] w-[75px] rounded-lg bg-gray-300 hover:bg-gray-500 rounded"></div>
                        </div>
                        <h1 className="place-self-center text-black text-base font-extralight col-span-2">
                          Judul blog yang akan di fetch oleh axios dari next js ke laravel endpoint
                        </h1>
                      </div>
                    </a>
                    <a href="#link-blog">
                      <div className="grid grid-rows-1 grid-flow-col pb-2">
                        <div className="bg-white w-[90px] row-span-2">
                          <div className="box-content h-[75px] w-[75px] rounded-lg bg-gray-300 hover:bg-gray-500 rounded"></div>
                        </div>
                        <h1 className="place-self-center text-black text-base font-extralight col-span-2">
                          Judul blog yang akan di fetch oleh axios dari next js ke laravel endpoint
                        </h1>
                      </div>
                    </a>
                    <a href="#link-blog">
                      <div className="grid grid-rows-1 grid-flow-col pb-2">
                        <div className="bg-white w-[90px] row-span-2">
                          <div className="box-content h-[75px] w-[75px] rounded-lg bg-gray-300 hover:bg-gray-500 rounded"></div>
                        </div>
                        <h1 className="place-self-center text-black text-base font-extralight col-span-2">
                          Judul blog yang akan di fetch oleh axios dari next js ke laravel endpoint
                        </h1>
                      </div>
                    </a>
                    <a href="#link-blog">
                      <div className="grid grid-rows-1 grid-flow-col pb-2">
                        <div className="bg-white w-[90px] row-span-2">
                          <div className="box-content h-[75px] w-[75px] rounded-lg bg-gray-300 hover:bg-gray-500 rounded"></div>
                        </div>
                        <h1 className="place-self-center text-black text-base font-extralight col-span-2">
                          Judul blog yang akan di fetch oleh axios dari next js ke laravel endpoint
                        </h1>
                      </div>
                    </a>
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

async function getServerSideProps(context: { params: any }) {
  const { params } = context;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const post = await res.json();

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}