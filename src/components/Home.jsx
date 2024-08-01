import React from 'react'
import Sidebar from './Sidebar'
import { useAuth } from '../context/AuthProvider'
import Video from './Video'

const Home = () => {
  const { data } = useAuth()
  console.log("Auth Data:", data)

  const contents = data?.contents ?? []; // Access contents array safely

  return (
    <div className='flex h-[600px]  overflow-y-scroll home-container '>
        <Sidebar />
      <div className='h-[700px]  hoo flex justify-between md:px-4'>
        {
          Array.isArray(contents) ? (
            contents.map((item) => (
              // console.log("Item Data:", item);
              // if (item.type !== 'video') return null
               <div className=' w-[100%] md:w-[340px] '>
                <Video key={item.id} video={item.video} />
               </div>
              
            ))
          ) : (
            <p>Loading...</p>
          )
        }
      </div>
    </div>
  )
}

export default Home
