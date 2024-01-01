"use client";

import React from 'react';
import Image from 'next/image';
import { bellIcon, compassIcon, heartIcon, homeIcon, notificationIcon, settingsIcon } from '@/utilities/Icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
    selected: number
}

const sidebar = [
    {
        text: 'Home',
        icon: homeIcon,
        link: '/'
    },
    {
        text: 'Discover',
        icon: compassIcon,
        link: '/discover'
    },
    {
        text: 'Favorites',
        icon: heartIcon,
        link: '/favorites'
    },
    {
        text: 'Notifications',
        icon: bellIcon,
        link: '/notifications'

    },
    {
        text: 'Activity',
        icon: notificationIcon,
        link: '/activity'

    },
    {
        text: 'Settings',
        icon: settingsIcon,
        link: '/settings'
    }
];


const Sidebar = (props: Props) => {
    return (
        <div className='flex flex-col h-screen w-fit'>
            <h1 className='text-center my-12 font-bold text-2xl'>Waveio.</h1>

            <div className='flex flex-col gap-4'>
                {sidebar.map((item, index) => {
                    const selected = props.selected === index ? 'bg-gray-200 rounded-full shadow-md font-semibold' : '';

                    return (
                        <Link href={item.link}
                            key={`sidebar-${index}`}
                            className={`py-2 px-8 flex flex-row gap-2 ${selected}`}>
                            <Image src={item.icon} width={20} height={20} alt={`${item.text} Icon`} />
                            <p>{item.text}</p>
                        </Link>)
                })}
            </div>
        </div>
    )
}

export default Sidebar