import Head from '@/component/head'
import Header from '@/component/header'
import Footer from '@/component/footer'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import he from 'he';
import ChildArray from '@/component/childArray'
import PopularBlog from '@/component/popularBlog'

async function fetchData() {
  const fetchAllData = await fetch('https://laravel.pupakindonesia.xyz/public/post/published').then((res) => res.json());
  return {
    fetchAllData
  };
}

const SinglePost = ({ fetchAllData, post }) =>  {
  const base_url = 'https://laravel.pupakindonesia.xyz/public/uploads/';
    return (
      <>
        <Head></Head>
        <Header></Header>
        <div className="bg-white">
          <div className="p-6 lg:px-8 md:flex md:items-center md:justify-between md:p-6 white mx-auto flexmx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-3 place-items-start">
                {post.slice(0,1).map(item => (
                  <div
                    key={item.posts_slug}
                    className="w-[800px]"
                  >
                    <div className="text-black font-bold text-4xl">{item.posts_title}</div>
                    <p className="text-black font-thin pt-1">{item.users_name} | {item.posts_date}</p>
                    <Image
                      src={base_url+item.posts_image}
                      alt="dummy.png"
                      className="rounded-lg"
                      width={800}
                      height={240} 
                    />
                      <div className="text-black pt-10" dangerouslySetInnerHTML={{ __html: he.decode(item.posts_content) }} />;
                  </div>
                ))}
              </div>
              <div className="grid gird-cols-1 place-items-start pl-[16rem]">
                <ul>
                  <li>
                    <h1 className="text-3xl pb-5 font-bold text-red-300 underline underline-offset-8 mb-5">Blog Populer</h1>
                    <PopularBlog data={fetchAllData}></PopularBlog>
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
                  <ChildArray data={post}></ChildArray>
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

  const res = await fetch(`https://laravel.pupakindonesia.xyz/public/post/${slug}`);
  const post = await res.json();

  return { 
    props: { 
      fetchAllData,
      post
    } 
  }
}

export default SinglePost