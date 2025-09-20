import { useState } from 'react'
import './App.css'
import ExamOverview from './components/ExamOverview'
import YouTubeVideos from './components/YouTubeVideos'
import TrailheadLinks from './components/TrailheadLinks'
import Quiz from './components/Quiz'

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', label: 'Exam Overview', icon: '📋' },
    { id: 'videos', label: 'YouTube Videos', icon: '🎥' },
    { id: 'trailhead', label: 'Trailhead Links', icon: '🛤️' },
    { id: 'quiz', label: 'Practice Quiz', icon: '🧠' }
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <img 
              src="https://cognizant.scene7.com/is/content/cognizant/COG-Logo-2022-1?fmt=png-alpha" 
              alt="Cognizant Logo" 
              className="cognizant-logo"
            />
          </div>
          <div className="header-text">
            <h1>🚀 Salesforce Data Cloud Certification Guide</h1>
            <p>Your comprehensive preparation resource for the Salesforce Data Cloud Certification exam</p>
          </div>
        </div>
      </header>

      <nav className="navigation">
        {sections.map(section => (
          <button
            key={section.id}
            className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="nav-icon">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </nav>

      <main className="main-content">
        {activeSection === 'overview' && <ExamOverview />}
        {activeSection === 'videos' && <YouTubeVideos />}
        {activeSection === 'trailhead' && <TrailheadLinks />}
        {activeSection === 'quiz' && <Quiz />}
      </main>
    </div>
  )
}

export default App
