import logoPic from '@/image/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react';

const links = [
  { href: '/', label: 'Beranda' },
  { href: '/review', label: 'Review' },
  { href: '/tipsdantricks', label: 'Tips & Tricks' },
];

export default function Header() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');
  const [label, setLabel] = useState('');

  const handleClick = (href: string) => {
    setActiveLink(href);
  };
    return (
        <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src={logoPic}
                alt="Picture of the author"
                width={150}
                height={50}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {links.map(({ href, label }) => (
              <div 
                key={href}
                onClick={() => handleClick(href)}
                className={router.pathname === href || activeLink === href ? 'text-sm font-semibold leading-6 text-gray-900 underline underline-offset-8' : ''}
              >
                <Link className="text-sm font-semibold leading-6 text-gray-900" href={href}>
                  {label}
                </Link>
              </div>
            ))}
            <a href="https://www.jennyhouse.id/" className="text-sm font-semibold leading-6 text-gray-900">Shop</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-red-300">+62 822 8888​ 5456</a>
          </div>
        </nav>
      </header>
    )
}