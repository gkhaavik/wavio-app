import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const DiscoverPage = (props: Props) => {
  return (
    <main className='flex flex-row min-h-screen'>
      <Sidebar selected={1} />
      <h1>Discovery Page</h1>
    </main>
  )
}

export default DiscoverPage