import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile.png'

type Props = {}

const Recommendations = (props: Props) => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className="text-xl"><span className='font-semibold'>Your</span> Artists</h1>
            <div className='flex flex-row gap-2'>
                {Array(5).fill(0).map((_, i) => <Artist key={i} />)}
            </div>
        </div>
    )
}

const Artist = () => {
    return (
        <div className='flex flex-col items-center gap-2'>
            <div className='w-14 h-14 bg-slate-500 rounded-full overflow-hidden'>
                <Image src={profilePic} alt="Profile Picture Placeholder"/>
            </div>

            <h2 className='text-xs text-gray-400'>Artist Name</h2>
        </div>
    )
}

export default Recommendations