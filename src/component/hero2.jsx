/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import Link from 'next/link'

function hero2({ data }) {
    const base_url = 'https://laravel.pupakindonesia.xyz/public/uploads/';
    return (
        <>
                <div className="bg-white">
                    <div className="mx-auto flex max-w-7xl p-6 pt-5 lg:px-8 relative isolate overflow-hidden items-center justify-center rounded-lg">
                        {data.slice(0, 2).map(item => (
                            <Link 
                                key={item.slug}
                                href={`/article/${item.slug}`}
                            >
                                <div className="relative group rounded-lg hover:opacity-90 bg-black mr-10 transition-opacity duration-300 opacity-100">
                                    <Image
                                        src={base_url+item.image}
                                        alt="dummy.png"
                                        width={800}
                                        height={580}
                                        className="object-cover z-0 box-content h-[580px] w-[800px] rounded-lg"
                                    />
                                    <span className="absolute bg-gradient-to-bl from-gray-900 via-transparent"></span>
                                    <span className="absolute bg-gradient-to-tr from-gray-900 via-transparent"></span>
                                    <div className="absolute inset-0 flex items-center justify-items-start z-20">
                                        <p className="transform transition hover:scale-110 text-white font-bold text-4xl mt-auto pl-4 pb-4 rounded-lg">{item.title}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
        </>
    )
}

export default hero2