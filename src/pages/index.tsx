import { Inter } from 'next/font/google'
import Header from '@/component/header'
import Footer from '@/component/footer'
import Hero from '@/component/hero'
import Head from '@/component/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head></Head>
      <Header></Header>
        <Hero></Hero>
        <div className="bg-white">
          <div className="p-6 lg:px-8 md:flex md:items-center md:justify-between md:p-6 white mx-auto flexmx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-3 place-items-start">
                <ul className="w-96">
                  <li>
                    <h1 className="text-xl font-bold text-black underline underline-offset-8 mb-5">Blog Terkini</h1>
                    <a href="#link-blog">
                      <div className="grid grid-cols-2 w-[800px]">
                        <div className="box-content rounded-lg h-20 w-48 m-1 p-20 lg:px-20 bg-gray-300 hover:bg-gray-500 rounded"></div>
                        <div className="text-black pt-2">
                          <h1 className="text-black font-bold text-2xl pb-3">Ini adalah judul untuk post</h1>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                          optio,
                          <p className="text-black font-extralight pt-5"> 9 Maret 2023</p>
                        </div>
                      </div>
                    </a>
                    <a href="#link-blog">
                      <div className="grid grid-cols-2 w-[800px]">
                        <div className="box-content rounded-lg h-20 w-48 m-1 p-20 lg:px-20 bg-gray-300 hover:bg-gray-500 rounded"></div>
                        <div className="text-black pt-2">
                          <h1 className="text-black font-bold text-2xl pb-3">Ini adalah judul untuk post</h1>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                          optio,
                          <p className="text-black font-extralight pt-5"> 9 Maret 2023</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <h1 className="text-xl font-bold text-black underline underline-offset-8 mb-5">Review</h1>
                    <a href="#link-blog">
                      <div className="grid grid-cols-2 w-[800px]">
                        <div className="box-content rounded-lg h-20 w-48 m-1 p-20 lg:px-20 bg-gray-300 hover:bg-gray-500 rounded"></div>
                        <div className="text-black pt-2">
                          <h1 className="text-black font-bold text-2xl pb-3">Ini adalah judul untuk post</h1>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                          optio,
                          <p className="text-black font-extralight pt-5"> 9 Maret 2023</p>
                        </div>
                      </div>
                    </a>
                    <a href="#link-blog">
                      <div className="grid grid-cols-2 w-[800px]">
                        <div className="box-content rounded-lg h-20 w-48 m-1 p-20 lg:px-20 bg-gray-300 hover:bg-gray-500 rounded"></div>
                        <div className="text-black pt-2">
                          <h1 className="text-black font-bold text-2xl pb-3">Ini adalah judul untuk post</h1>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                          optio,
                          <p className="text-black font-extralight pt-5"> 9 Maret 2023</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <h1 className="text-xl font-bold text-black underline underline-offset-8 mb-5">Tips & Tricks</h1>
                    <a href="#link-blog">
                      <div className="grid grid-cols-2 w-[800px]">
                        <div className="box-content rounded-lg h-20 w-48 m-1 p-20 lg:px-20 bg-gray-300 hover:bg-gray-500 rounded"></div>
                        <div className="text-black pt-2">
                          <h1 className="text-black font-bold text-2xl pb-3">Ini adalah judul untuk post</h1>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                          optio,
                          <p className="text-black font-extralight pt-5"> 9 Maret 2023</p>
                        </div>
                      </div>
                    </a>
                    <a href="#link-blog">
                      <div className="grid grid-cols-2 w-[800px]">
                        <div className="box-content rounded-lg h-20 w-48 m-1 p-20 lg:px-20 bg-gray-300 hover:bg-gray-500 rounded"></div>
                        <div className="text-black pt-2">
                          <h1 className="text-black font-bold text-2xl pb-3">Ini adalah judul untuk post</h1>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                          optio,
                          <p className="text-black font-extralight pt-5"> 9 Maret 2023</p>
                        </div>
                      </div>
                    </a>
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
