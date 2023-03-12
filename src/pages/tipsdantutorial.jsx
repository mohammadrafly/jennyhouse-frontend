import Head from '@/component/head'
import Header from '@/component/header'
import Footer from '@/component/footer'
import Link from 'next/link'
import Dummy from '@/image/dummy.png'
import Image from 'next/image'
import HeroCard from '@/component/card_hero'
import Hero2 from '@/component/hero2'

async function fetchData() {
    const fetchAllData = await fetch("http://api.pupakindonesia.xyz/api/posts").then((res) => res.json());
    const fetchDataTipsDanTutorial = await fetch("http://api.pupakindonesia.xyz/api/categories/tips-dan-tutorial").then((res) => res.json());
  
    return {
      fetchAllData,
      fetchDataTipsDanTutorial,
    };
}

function TipsDanTutorial({ fetchAllData, fetchDataTipsDanTutorial}) {
    const base_url = 'http://api.pupakindonesia.xyz/uploads/';
    const data = 'Tips & Tutorial'
    return (
      <>
        <Head></Head>
        <Header></Header>
        <HeroCard data={data}></HeroCard>
        <Hero2 data={fetchAllData}></Hero2>
        <div className="bg-white">
          
          <div className="p-6 lg:px-8 md:flex md:items-center md:justify-between md:p-6 white mx-auto flexmx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-3 place-items-start">
                <ul className="w-96">
                  <li>
                    <h1 className="text-xl font-bold text-black underline underline-offset-8 mb-5">Tips & Tutorial</h1>
                    {fetchDataTipsDanTutorial.slice(0,6).map(item => (
                      <Link 
                        key={item.title}
                        href={`/article/${item.post_slug}`}>
                        <div className="grid grid-cols-2 w-[800px]">
                          <Image
                            src={base_url+item.header_image}
                            width={352}
                            height={240}
                            alt="dummy.png"
                            className="box-content rounded-lg h-[240px] w-[352px] m-1 bg-gray-300 hover:bg-gray-500 rounded" />
                          <div className="text-black pt-2">
                            <h1 className="text-black font-bold text-2xl pb-3">{item.title_post}</h1>
                              {item.title_categories}
                            <p className="text-black font-extralight pt-5">{item.post_date}</p>
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
                    <h1 className="text-3xl pb-5 font-bold text-red-300 underline underline-offset-8 mb-5">Blog Populer</h1>
                    {fetchAllData.slice(0, 4).map(item => (
                      <Link
                        key={item.id}
                        href={`/article/${item.title_post}`}>
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
        </div>
        <Footer></Footer>
      </>
    )
}

export async function getServerSideProps() {
    const { fetchAllData, fetchDataTipsDanTutorial } = await fetchData();
    return { 
      props: { 
        fetchAllData,
        fetchDataTipsDanTutorial
      } 
    }
  }

export default TipsDanTutorial