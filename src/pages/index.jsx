import Header from '@/component/header'
import Footer from '@/component/footer'
import Hero from '@/component/hero'
import Head from '@/component/head'
import Link from 'next/link'
import Image from 'next/image'
import PopularBlog from '@/component/popularBlog'

async function fetchData() {
  const fetchAllData = await fetch('https://laravel.pupakindonesia.xyz/public/post/published').then((res) => res.json())
  const fetchDataReview = await fetch('https://laravel.pupakindonesia.xyz/public/post/category/review').then((res) => res.json());
  const fetchDataTipsDanTutorial = await fetch('https://laravel.pupakindonesia.xyz/public/post/category/tips-dan-tutorial').then((res) => res.json());

  return {
    fetchAllData,
    fetchDataReview,
    fetchDataTipsDanTutorial,
  };
}

function Home({ fetchAllData, fetchDataReview, fetchDataTipsDanTutorial }) {
  const base_url = 'https://laravel.pupakindonesia.xyz/public/uploads/';
  return (
    <>
      <Head></Head>
      <Header></Header>
        <Hero data={fetchAllData}></Hero>
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
                    {fetchAllData.slice(3,5).map(item => (
                      <Link
                        key={item.id}
                        href={`/article/${item.slug}`}
                      >
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
                    <Link
                      href={`/blogterkini`}
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
                    {fetchDataReview.slice(0,2).map(item => (
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
                    {fetchDataTipsDanTutorial.slice(0,2).map(item => (
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
  const { fetchAllData, fetchDataReview, fetchDataTipsDanTutorial } = await fetchData();
  return { 
    props: { 
      fetchAllData,
      fetchDataReview, 
      fetchDataTipsDanTutorial
    } 
  }
}

export default Home