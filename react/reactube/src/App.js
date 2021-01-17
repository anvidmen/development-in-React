import React, { useState } from 'react'
import { NavBar, Siderbar, VideoList, VideoDetail } from './components'
import youtube from './api/youtube'
import './app.css'

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleSubmit = async (searchTerm) => {
    const { data: { items: videos } } = await youtube.get('search', {
      params: {
        q: searchTerm
      }
    })

    setVideos(videos)
    setSelectedVideo(videos[0])
  }

  return (
    <div className='app'>
      <NavBar onSubmit={handleSubmit} />
      <div className='app__container'>
        <Siderbar />
        <div className='videos__container'>
          <div className='videos__content'>
            <div className='video__item'>
              <VideoDetail video={selectedVideo} />
            </div>
            <div className='video__items'>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
