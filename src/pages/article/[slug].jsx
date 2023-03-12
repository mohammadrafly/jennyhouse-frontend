import Head from '@/component/head'
import Header from '@/component/header'
import Footer from '@/component/footer'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

async function fetchData() {
  const fetchAllData = await fetch("https://api.pupakindonesia.xyz/api/posts/").then((res) => res.json());
  return {
    fetchAllData
  };
}

const SinglePost = ({ fetchAllData, post }) =>  {
    const base_url = 'https://api.pupakindonesia.xyz/uploads/';
    console.log(post);
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
                      className="rounded-lg"
                      width={800}
                      height={240} 
                    />
                    <p className="text-black pt-10">{item.content}</p>
                  </div>
                ))}
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
                <h1 className="text-3xl font-bold text-black mb-2 w-[800px] pb-3">Rekomendasi Produk</h1>
                <div className="grid grid-cols-2 gap-5 w-[800px]">
                {post.slice(0, 1).map(item => (
                    <Link
                      key={item.t_product}
                      href={`/article/${item.t_product}`}
                    >
                        <Image
                          src={base_url+item.img}
                          alt="dummy.png"
                          width={352}
                          height={240}
                          className="box-content rounded-lg h-[240px] w-[352px] m-1 bg-gray-300 hover:bg-gray-500 rounded" 
                        />
                        <div className="text-black pt-2">
                          <h1 className="text-black font-bold text-2xl pb-3">{item.t_product}</h1>
                          <p className="text-black font-extralight pt-5">{item.desc}</p>
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

export async function getServerSideProps(context) {
  const { fetchAllData } = await fetchData();
  const { slug } = context.query;

  const res = await fetch(`https://api.pupakindonesia.xyz/api/posts/${slug}`);
  const post = await res.json();

  return { 
    props: { 
      fetchAllData,
      post
    } 
  }
}

export default SinglePost