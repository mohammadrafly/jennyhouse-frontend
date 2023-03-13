import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ChildArray = ({ data }) => {
  const product_url = 'https://laravel.pupakindonesia.xyz/public/uploads/';
  return (
    <div>
      {data.map((parent) => (
        <div key={parent.name}>
          <div>
            {parent.products.map((child) => (
                <><Link
                    key={child.link}
                    href={child.link}
                >
                    <Image
                        src={product_url + child.image}
                        alt="dummy.png"
                        width={352}
                        height={240}
                        className="box-content rounded-lg h-[240px] w-[352px] m-1 bg-gray-300 hover:bg-gray-500 rounded" />
                    <div className="text-black pt-2">
                        <h1 className="text-black font-bold text-2xl pb-3">{child.name}</h1>
                        <p className="text-black font-extralight pt-5">{child.desc}</p>
                    </div>
                    <div className="pt-5 pb-5 flex justify-self-start">
                        <div className="border-2 pb-3 pt-3 pr-10 pl-10 border-red-300 bg-white hover:bg-red-200 rounded-full text-red-300 duration-300">
                            <button type="button" className="text-xl font-medium leading-6 text-red-300 hover:text-white duration-300">Buy Now</button>
                        </div>
                    </div>
                </Link><div key={child.name}>{child.name}</div>
                </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChildArray;