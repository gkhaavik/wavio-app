import FavoriteAlbum from '@/components/Home/FavoriteAlbum'
import Header from '@/components/Home/Header'
import Recommendations from '@/components/Home/Recommendations'
import Sidebar from '@/components/Sidebar'
import React from 'react'


export default function Home() {
  return (
    <main className='flex flex-row min-h-screen'>
      <Sidebar selected={0} />

      {/* Main content */}
      <div className='mx-auto flex flex-col p-8 gap-8'>
        {/* Header */}
        <Header />
        {/* Recommendations */}
        <Recommendations />
        {/* Favorite Album */}
        <FavoriteAlbum />
      </div>
    </main>
  )
}
