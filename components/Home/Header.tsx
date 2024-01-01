import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile.png'
import { tuningIcon } from '@/utilities/Icons'

type Props = {

}

const Header = (props: Props) => {
  return (
    <div className='flex flex-row justify-between flex-wrap lg:gap-8'>
      {/* User details */}
      <div className='flex flex-row gap-2 items-center'>
        {/* Profile picture */}
        <Image src={profilePic} alt="Profile Picture Placeholder"
          width={48} height={48}
          className='rounded-full' />
        {/* User name */}
        <h2 className='text-3xl'>
          Good morning, <span className='font-semibold'>John Doe</span>
        </h2>
      </div>

      {/* Search bar */}
      <div className='flex flex-row gap-2 items-center text-xl'>
        <input type="text" placeholder='What do you want?' className='bg-gray-200 rounded-md px-4 py-2' />
        <button className='bg-gray-200 rounded-md px-4 py-2'>
          <Image src={tuningIcon} width={32} alt='tuning icon' />
        </button>
      </div>
    </div>
  )
}

export default Header