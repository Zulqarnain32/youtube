import React from 'react'
import { Link } from "react-router-dom"

const Video = ({ video }) => {
  console.log("Video Data:", video);

 
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className=' '>
          <div>
            <img
              className='w-[full] h-full md:rounded-xl '
              src={video?.thumbnails[0]?.url}
              alt="Video Thumbnail"
            />
            <p>{video?.lengthSeconds}</p>
            <p>{video?.title}</p>
            <p>{video?.stats?.views}</p>
            
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Video