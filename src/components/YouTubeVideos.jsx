import React, { useState } from 'react'
import { videoCategories } from '../data/youtubeVideoCategories';
import YouTubeModal from './YouTubeModal';

function YouTubeVideos() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleVideoClick = (video) => {
    setSelectedVideo(video)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedVideo(null)
    document.body.style.overflow = ''
  }

  return (
    <div className="section">
      <h2>🎥 Recommended YouTube Videos</h2>
      <p className="section-description">
        Curated collection of high-quality YouTube videos to help you master Data Cloud concepts and prepare for the certification exam.
      </p>

      {videoCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="video-category">
          <h3>{category.category}</h3>
          <div className="videos-grid">
            {category.videos.map((video, videoIndex) => (
              <div key={videoIndex} className="video-card">
                <div className="video-header">
                  <h4>{video.title}</h4>
                  <span className="video-duration">{video.duration}</span>
                </div>
                <p className="video-channel">📺 {video.channel}</p>
                <p className="video-description">{video.description}</p>
                <button 
                  onClick={() => handleVideoClick(video)}
                  className="watch-button"
                >
                  ▶️ Watch Video
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <YouTubeModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        videoUrl={selectedVideo?.url}
        videoTitle={selectedVideo?.title}
      />
    </div>
  )
}

export default YouTubeVideos
