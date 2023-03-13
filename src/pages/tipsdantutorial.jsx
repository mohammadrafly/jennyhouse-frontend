import Head from '@/component/head'
import Header from '@/component/header'
import Footer from '@/component/footer'
import Link from 'next/link'
import Image from 'next/image'
import HeroCard from '@/component/card_hero'
import Hero2 from '@/component/hero2'
import PopularBlog from '@/component/popularBlog'

async function fetchData() {
    const fetchAllData = await fetch('https://laravel.pupakindonesia.xyz/public/post/published').then((res) => res.json());
    const fetchDataTipsDanTutorial = await fetch('https://laravel.pupakindonesia.xyz/public/post/category/tips-dan-tutorial').then((res) => res.json());
  
    return {
      fetchAllData,
      fetchDataTipsDanTutorial,
    };
}

function TipsDanTutorial({ fetchAllData, fetchDataTipsDanTutorial}) {
    const base_url = 'https://laravel.pupakindonesia.xyz/public/uploads/';
    const data = 'Tips & Tutorial'
    return (
      <>
        <Head></Head>
        <Header></Header>
        <HeroCard data={data}></HeroCard>
        <Hero2 data={fetchDataTipsDanTutorial}></Hero2>
        <div className="bg-white">
          
          <div className="p-6 lg:px-8 md:flex md:items-center md:justify-between md:p-6 white mx-auto flexmx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-3 place-items-start">
                <ul className="w-96">
                  <li>
                    {fetchDataTipsDanTutorial.slice(2, 10).map(item => (
                      <Link 
                        key={item.slug}
                        href={`/article/${item.slug}`}>
                        <div className="grid grid-cols-2 w-[800px]">
                          <Image
                            src={base_url+item.image}
                            width={352}
                            height={240}
                            alt="dummy.png"
                            className="box-content rounded-lg h-[240px] w-[352px] m-1 bg-gray-300 hover:bg-gray-500 rounded" />
                          <div className="text-black pt-2">
                            <h1 className="text-black font-bold text-2xl pb-3">{item.title}</h1>
                            <p className="text-black font-extralight pt-5">{item.category.name}</p>
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
                    <PopularBlog data={fetchAllData}></PopularBlog>
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