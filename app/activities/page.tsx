import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const DiscoverPage = (props: Props) => {
  return (
    <main className='flex flex-row min-h-screen'>
      <Sidebar selected={2} />
      <h1>Home</h1>
    </main>
  )
}

export default DiscoverPage