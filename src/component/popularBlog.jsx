import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const popularBlog = ({ data }) => {
  const base_url = 'https://laravel.pupakindonesia.xyz/public/uploads/';
  return (
    <div>
                    {data.slice(0,4).map(item => (
                      <Link
                        key={item.slug}
                        href={`/article/${item.slug}`}>
                        <div className="grid grid-rows-1 grid-flow-col pb-2">
                          <div className="bg-white w-[90px] row-span-2">
                            <Image 
                              src={base_url+item.image}
                              alt="dummy.png"
                              width={75}
                              height={75}
                              className="box-content h-[75px] w-[75px] rounded-lg bg-gray-300 hover:bg-gray-500 rounded"
                            />
                          </div>
                          <h1 className="content-center text-black font-bold col-span-2">
                            {item.title}
                          </h1>
                        </div>
                      </Link>
                    ))}
    </div>
  );
};

export default popularBlog;