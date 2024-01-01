import Image from 'next/image'
import React from 'react'

type Props = {}

const FavoriteAlbum = (props: Props) => {
    return (
        <div className='flex flex-row gap-4'>
            <div className='flex flex-col flex-1/2 gap-4'>
                <h1 className="text-xl"><span className='font-semibold'>Your</span> Artists</h1>
                <div className='flex flex-col gap-2'>
                    {/* Albums here */}
                    <Album />
                </div>
            </div>

            {/* Songs */}
            <div className='flex flex-col gap-2 flex-grow'>
                <Song />
                <Song />
                <Song />
                <Song />
            </div>
        </div>
    )
}

const Album = () => {
    return (
        <div className='w-64 h-64 bg-red-500 rounded-lg relative'>
            <Image src='https://via.placeholder.com/300x300' alt='Album Cover' layout='fill' className='rounded-lg' />
            <div className='flex flex-col bg-white rounded-full px-4 py-2 absolute bottom-0 m-2 text-sm'>
                <h1>Album Name</h1>
                <h2 className='text-gray-500'>Artist Name</h2>
            </div>
        </div>
    )
}

const Song = () => {
    return (
        <div className='flex flex-row gap-4 bg-white p-2 rounded-lg'>
            <Image src='https://via.placeholder.com/300x300' alt='Album Cover' width={50} height={50} className='rounded-lg' />
            <div className='flex flex-col'>
                <h1>Track Name</h1>
                <h2 className='text-gray-500'>Artist Name</h2>
            </div>

            <div className='flex flex-col'>
                <h1>3:00</h1>
                <h2 className='text-gray-500'>Album Name</h2>
            </div>

            <div >
                <button className='bg-green-500 text-white rounded-full px-4 py-2'>Play</button>
            </div>
        </div>
    )
}

export default FavoriteAlbum