"use client"

import React, { useRef, useState } from 'react';

const Creatememe = ({ searchParams }) => {
    const [img, setImg] = useState('');
    const text1 = useRef();
    const text2 = useRef();

    const createMeme = async (event) => {
        event.preventDefault();
        console.log(text1.current.value);
        console.log(text2.current.value);

        const data = await fetch(
            `https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=mabdullah6600&password=asdfgfdsa123&text0=${text1.current?.value}&text1=${text2.current?.value}`,
            {
                method: 'POST',
            }
        );
        const response = await data.json();
        console.log(response.data.url);
        setImg(response.data.url);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Create Your Meme</h1>

            <div className="flex flex-col items-center gap-4">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="p-4">
                        <img
                            className="rounded-lg"
                            src={searchParams.url}
                            alt="meme-template"
                        />
                    </figure>
                </div>

                <form onSubmit={createMeme} className="w-full max-w-md bg-base-200 p-4 rounded-lg shadow-md space-y-4">
                    <input
                        type="text"
                        placeholder="Enter text 1"
                        ref={text1}
                        className="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Enter text 2"
                        ref={text2}
                        className="input input-bordered w-full"
                    />
                    <button type="submit" className="btn btn-warning w-full">
                        Create Meme
                    </button>
                </form>

                {img && (
                    <div className="card w-96 bg-base-100 shadow-xl mt-4">
                        <figure className="p-4">
                            <img
                                className="rounded-lg"
                                src={img}
                                alt="final-meme"
                            />
                        </figure>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Creatememe;