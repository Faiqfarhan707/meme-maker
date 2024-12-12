import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home = async () => {
  const data = await fetch('https://api.imgflip.com/get_memes');
  const response = await data.json();
  console.log(response.data.memes);

  return (
    <>
      <h1 className="text-center text-4xl font-bold my-5">Faiq Meme Maker</h1>
      <div className="flex justify-center gap-5 flex-wrap">
        {response.data.memes.map((item) => {
          return (
            <div key={item.id} className="card w-80 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src={item.url}
                  width={200}
                  height={200}
                  alt={item.name}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-sm font-medium">{item.name.slice(0, 10)}...</h2>
                <Link
                  href={{
                    pathname: 'creatememe',
                    query: {
                      url: item.url,
                      id: item.id,
                    },
                  }}
                >
                  <button className="btn btn-warning mt-3">Generate this meme</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
