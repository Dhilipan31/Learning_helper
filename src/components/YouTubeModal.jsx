import React from 'react'

function YouTubeModal({ isOpen, onClose, videoUrl, videoTitle }) {
  if (!isOpen) return null

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  const videoId = getYouTubeVideoId(videoUrl)
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className="youtube-modal-overlay" onClick={handleOverlayClick}>
      <div className="youtube-modal">
        <div className="youtube-modal-header">
          <h3 className="youtube-modal-title">{videoTitle}</h3>
          <button 
            className="youtube-modal-close" 
            onClick={onClose}
            aria-label="Close video"
          >
            ✕
          </button>
        </div>
        <div className="youtube-modal-content">
          <iframe
            src={embedUrl}
            title={videoTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="youtube-iframe"
          />
        </div>
      </div>
    </div>
  )
}

export default YouTubeModal
