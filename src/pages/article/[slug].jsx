import Head from '@/component/head'
import Header from '@/component/header'
import Footer from '@/component/footer'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

async function fetchData() {
  const fetchSingleData = await fetch("http://api.pupakindonesia.xyz/api/posts/awdaw-awdaw-awdaw-awd").then((res) => res.json());
  const fetchAllData = await fetch("http://api.pupakindonesia.xyz/api/posts/").then((res) => res.json());
  return {
    fetchSingleData,
    fetchAllData
  };
}


function SinglePost({ fetchSingleData, fetchAllData }) {
    const base_url = 'http://api.pupakindonesia.xyz/uploads/';

    return (
      <>
        <Head></Head>
        <Header></Header>
        <div className="bg-white">
          <div className="p-6 lg:px-8 md:flex md:items-center md:justify-between md:p-6 white mx-auto flexmx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-3 place-items-start">
                  <div
                    key={fetchSingleData.slug}
                    className="w-[800px]"
                  >
                    <div className="text-black font-bold text-4xl">{fetchSingleData.title}</div>
                    <p className="text-black font-thin pt-1">{fetchSingleData.author} | {fetchSingleData.created_at}</p>
                    <Image
                      src={base_url+fetchSingleData.header_image}
                      alt="dummy.png"
                      className="rounded-lg"
                      width={800}
                      height={240} 
                    />
                    <p className="text-black pt-10">{fetchSingleData.content}</p>
                  </div>
              </div>
              <div className="grid gird-cols-1 place-items-start pl-[16rem]">
                <ul>
                  <li>
                    <h1 className="text-3xl pb-5 font-bold text-red-300 underline underline-offset-8 mb-5">Blog Populer</h1>
                    {fetchAllData.slice(0, 4).map(item => (
                      <Link
                        key={item.id}
                        href={`/article/${item.post_slug}`}>
                        <div className="grid grid-rows-1 grid-flow-col pb-2">
                          <div className="bg-white w-[90px] row-span-2">
                            <Image 
                              src={base_url+item.header_image}
                              alt="dummy.png"
                              width={75}
                              height={75}
                              className="box-content h-[75px] w-[75px] rounded-lg bg-gray-300 hover:bg-gray-500 rounded"
                            />
                          </div>
                          <h1 className="content-center text-black font-black col-span-2">
                            {item.title_post}
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
                  
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Footer></Footer>
      </>
    )
}

export async function getServerSideProps() {
  const { fetchSingleData, fetchAllData } = await fetchData();
  return { 
    props: { 
      fetchSingleData,
      fetchAllData
    } 
  }
}

export default SinglePost