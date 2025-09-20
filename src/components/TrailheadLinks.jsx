import React from 'react'
import { trailheadModules } from '../data/trailheadLinkCategory';

function TrailheadLinks() {

  return (
    <div className="section">
      <h2>🛤️ Trailhead Learning Path</h2>
      <p className="section-description">
        Structured learning modules from Salesforce Trailhead to build your Data Cloud expertise step by step.
      </p>

      {trailheadModules.map((category, categoryIndex) => (
        <div key={categoryIndex} className="trailhead-category">
          <h3>{category.category}</h3>
          <div className="modules-grid">
            {category.modules.map((module, moduleIndex) => (
              <div key={moduleIndex} className="module-card">
                <div className="module-header">
                  <h4>{module.title}</h4>
                  <div className="module-meta">
                    <span className={`difficulty ${module.difficulty.toLowerCase()}`}>
                      {module.difficulty}
                    </span>
                    <span className="estimated-time">⏱️ {module.estimatedTime}</span>
                  </div>
                </div>
                <p className="module-description">{module.description}</p>
                <a 
                  href={module.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="trailhead-button"
                >
                  🚀 Start Module
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="trailhead-tips">
        <h3>💡 Trailhead Learning Tips</h3>
        <ul>
          <li>Complete modules in order for the best learning experience</li>
          <li>Take hands-on challenges seriously - they mirror real exam scenarios</li>
          <li>Join Trailhead community discussions for additional insights</li>
          <li>Earn badges to track your progress and build your profile</li>
          <li>Review module summaries and key concepts regularly</li>
        </ul>
      </div>
    </div>
  )
}

export default TrailheadLinks
