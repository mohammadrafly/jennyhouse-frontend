import Logo from '@/image/logo-jh.png'
import IconFB from '@/image/icon-fb.png'
import IconYT from '@/image/icon-yt.png'
import IconIG from '@/image/icon-ig.png'
import Image from 'next/image'

export default function footer() {
    return (
        <footer className="bg-gray-300 sticky bottom-0">
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
                            <a href="#" className="mr-4 text-sm text-black hover:underline md:mr-6">About</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="mr-4 text-sm text-black hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="mr-4 text-sm text-black hover:underline md:mr-6">Licensing</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="text-sm text-black hover:underline">Contact</a>
                        </li>
                    </ul>
                    <ul className="mr-20 justify-center items-center">
                        <h1 className="text-black font-bold text-xl">About Us</h1>
                        <li className="mt-3">
                            <a href="#" className="mr-4 text-sm text-black hover:underline md:mr-6">About</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="mr-4 text-sm text-black hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="mr-4 text-sm text-black hover:underline md:mr-6">Licensing</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="text-sm text-black hover:underline">Contact</a>
                        </li>
                    </ul>
                    <ul className="mr-20 justify-center items-center">
                        <h1 className="text-black font-bold text-xl">About Us</h1>
                        <li className="mt-3">
                            <a href="#" className="mr-4 text-sm text-black hover:underline md:mr-6">About</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="mr-4 text-sm text-black hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="mr-4 text-sm text-black hover:underline md:mr-6">Licensing</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="text-sm text-black hover:underline">Contact</a>
                        </li>
                    </ul>
                    <ul className="mr-20 justify-center items-center">
                        <h1 className="text-black font-bold text-xl">About Us</h1>
                        <li className="mt-3">
                            <a href="#" className="mr-4 text-sm text-black hover:underline md:mr-6">About</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="mr-4 text-sm text-black hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="mr-4 text-sm text-black hover:underline md:mr-6">Licensing</a>
                        </li>
                        <li className="mt-3">
                            <a href="#" className="text-sm text-black hover:underline">Contact</a>
                        </li>
                    </ul>
                    <ul>
                        <div className="mx-auto flex max-w-7xl items-center justify-between lg:px-8 mb-2">
                            <h1 className="text-black font-bold text-xl">Follow Us On</h1>
                        </div>
                        <div className="grid grid-cols-3">
                            <li className="bg-white p-1 rounded-full m-3">
                              <a href="#ig">
                                <Image 
                                    src={IconIG}
                                    alt="logo"
                                    width={50}
                                    height={50}
                                />
                              </a>
                            </li>
                            <li className="bg-white p-1 rounded-full m-3">
                              <a href="#yt">
                                <Image 
                                    src={IconYT}
                                    alt="logo"
                                    width={50}
                                    height={50}
                                />
                              </a>
                            </li>
                            <li className="bg-white p-1 rounded-full m-3">
                              <a href="#fb">
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