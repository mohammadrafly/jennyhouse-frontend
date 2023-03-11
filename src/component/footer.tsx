import Logo from '@/image/logo-jh.png'
import IconFB from '@/image/icon-fb.png'
import IconYT from '@/image/icon-yt.png'
import IconIG from '@/image/icon-ig.png'
import Image from 'next/image'

export default function footer() {
    return (
        <footer className="bg-red-100 sticky bottom-0">
            <div className="p-6 lg:px-8 md:flex md:items-center md:justify-between md:p-6 white mx-auto flexmx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="grid grid-cols-6">
                    <Image 
                        src={Logo}
                        alt="logo"
                        width={150}
                        height={150}
                        className="mr-20"
                    />
                    <ul className="mr-20 justify-center items-center">
                        <h1 className="text-black font-bold text-xl">About Us</h1>
                        <li className="mt-3">
                            <a href="https://www.jennyhouse.id/brand" className="mr-4 text-sm text-black hover:underline md:mr-6" target="_blank" rel="noopener noreferrer">Brand</a>
                        </li>
                        <li className="mt-3">
                            <a href="https://www.jennyhouse.id/contactus" className="mr-4 text-sm text-black hover:underline md:mr-6" target="_blank" rel="noopener noreferrer">Hubungi Kami</a>
                        </li>
                        <li className="mt-3">
                            <a href="https://www.jennyhouse.id/shop" className="mr-4 text-sm text-black hover:underline md:mr-6" target="_blank" rel="noopener noreferrer">Toko</a>
                        </li>
                    </ul>
                    <ul className="mr-20 justify-center items-center">
                        <h1 className="text-black font-bold text-xl">Customer Care</h1>
                        <li className="mt-3">
                            <a href="https://wa.me/628228888​5456" className="mr-4 text-sm text-black hover:underline md:mr-6"target="_blank" rel="noopener noreferrer">+62 822 8888​ 5456</a>
                        </li>
                        <li className="mt-3">
                            <a href="mailto:mail@jennyhouse.id?subject=Subjek Email&body=Halo.." className="mr-4 text-sm text-black hover:underline md:mr-6" target="_blank" rel="noopener noreferrer">mail@jennyhouse.id</a>
                        </li>
                    </ul>
                    <ul className="mr-20 justify-center items-center">
                        <h1 className="text-black font-bold text-xl">Product</h1>
                        <li className="mt-3">
                            <a href="https://www.jennyhouse.id/cosmetics" className="mr-4 text-sm text-black hover:underline md:mr-6"target="_blank" rel="noopener noreferrer">Cosmetic</a>
                        </li>
                        <li className="mt-3">
                            <a href="https://www.jennyhouse.id/jh-haircare" className="mr-4 text-sm text-black hover:underline md:mr-6"target="_blank" rel="noopener noreferrer">Hair Care</a>
                        </li>
                        <li className="mt-3">
                            <a href="https://www.jennyhouse.id/haircolor" className="mr-4 text-sm text-black hover:underline md:mr-6"target="_blank" rel="noopener noreferrer">Hari Color</a>
                        </li>
                    </ul>
                    <ul className="mr-20 justify-center items-center">
                        <h1 className="text-black font-bold text-xl">Avaiable At</h1>
                        <li className="mt-3">
                            <a href="https://shopee.co.id/shop/273510696?af_click_lookback=7d&af_reengagement_window=7d&af_siteid=an_11358680000&af_sub_siteid=273510696----&af_viewthrough_lookback=
                            1d&c=-&is_retargeting=true&pid=affiliates&utm_campaign=-&utm_content=273510696----&utm_medium=a" className="mr-4 text-sm text-black hover:underline md:mr-6"target="_blank" rel="noopener noreferrer">Shopee</a>
                        </li>
                        <li className="mt-3">
                            <a href="https://www.tokopedia.com/jennyhouseid" className="mr-4 text-sm text-black hover:underline md:mr-6"target="_blank" rel="noopener noreferrer">Tokped</a>
                        </li>
                        <li className="mt-3">
                            <a href="https://www.lazada.co.id/shop/jennyhouse-indonesia" className="mr-4 text-sm text-black hover:underline md:mr-6"target="_blank" rel="noopener noreferrer">Lazada</a>
                        </li>
                        <li className="mt-3">
                            <a href="https://www.zalora.co.id/jennyhouse/" className="mr-4 text-sm text-black hover:underline md:mr-6"target="_blank" rel="noopener noreferrer">Zalora</a>
                        </li>
                        <li className="mt-3">
                            <a href="https://www.tiktok.com/@jennyhouse.id" className="mr-4 text-sm text-black hover:underline md:mr-6"target="_blank" rel="noopener noreferrer">Tiktok Shop</a>
                        </li>
                        <li className="mt-3">
                            <a href="https://www.beautyhaul.com/brand/jennyhouse" className="mr-4 text-sm text-black hover:underline md:mr-6"target="_blank" rel="noopener noreferrer">BeautyHaul</a>
                        </li>
                        <li className="mt-3">
                            <a href="https://studio.femaledaily.com/brand/218-jennyhouse" className="mr-4 text-sm text-black hover:underline md:mr-6"target="_blank" rel="noopener noreferrer">Female Daily</a>
                        </li>
                    </ul>
                    <ul>
                        <div className="mx-auto flex max-w-7xl items-center justify-between lg:px-8 mb-2">
                            <h1 className="text-black font-bold text-xl">Follow Us On</h1>
                        </div>
                        <div className="grid grid-cols-3">
                            <li className="bg-red-300 p-2 rounded-full m-3 ">
                              <a href="https://www.instagram.com/jennyhouse.id/"target="_blank" rel="noopener noreferrer">
                                <Image 
                                    src={IconIG}
                                    alt="logo"
                                    width={50}
                                    height={50}
                                />
                              </a>
                            </li>
                            <li className="bg-red-300 p-2 rounded-full m-3">
                              <a href="https://www.youtube.com/channel/UC7sPi5u4zPsJvDBLi2GyXkQ?view_as=subscriber"target="_blank" rel="noopener noreferrer">
                                <Image 
                                    src={IconYT}
                                    alt="logo"
                                    width={50}
                                    height={50}
                                />
                              </a>
                            </li>
                            <li className="bg-red-300 p-2 rounded-full m-3">
                              <a href="https://www.facebook.com/Jennyhouse.id/"target="_blank" rel="noopener noreferrer">
                                <Image 
                                    src={IconFB}
                                    alt="logo"
                                    width={50}
                                    height={50}
                                />
                              </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </footer>
    )
}