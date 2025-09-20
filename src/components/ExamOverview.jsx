import React from 'react'

function ExamOverview() {
  const examDetails = {
    title: "Salesforce Data Cloud Specialist",
    duration: "105 minutes",
    questions: "60 multiple-choice questions",
    passingScore: "65%",
    cost: "$200 USD",
    validity: "2 years"
  }

  const keyTopics = [
    {
      category: "Data Cloud Fundamentals",
      topics: [
        "Understanding Data Cloud architecture and components",
        "Data ingestion and transformation processes",
        "Identity resolution and data unification",
        "Data model and schema management"
      ]
    },
    {
      category: "Data Management",
      topics: [
        "Data sources and connectors",
        "Data preparation and cleansing",
        "Data governance and security",
        "Data quality and monitoring"
      ]
    },
    {
      category: "Analytics and Insights",
      topics: [
        "Creating and managing segments",
        "Building and configuring dashboards",
        "Report generation and analysis",
        "AI-powered insights and recommendations"
      ]
    },
    {
      category: "Integration and APIs",
      topics: [
        "Data Cloud APIs and SDKs",
        "Integration with Salesforce CRM",
        "Third-party system integrations",
        "Real-time data synchronization"
      ]
    }
  ]

  const examTips = [
    "Focus on hands-on experience with Data Cloud features",
    "Understand data modeling and transformation concepts",
    "Practice with real-world scenarios and use cases",
    "Review Salesforce documentation and release notes",
    "Take practice exams to identify knowledge gaps",
    "Join Salesforce community groups and forums"
  ]

  return (
    <div className="section">
      <h2>📋 Exam Overview</h2>
      
      <div className="exam-details">
        <h3>Exam Information</h3>
        <div className="details-grid">
          <div className="detail-item">
            <strong>Certification:</strong> {examDetails.title}
          </div>
          <div className="detail-item">
            <strong>Duration:</strong> {examDetails.duration}
          </div>
          <div className="detail-item">
            <strong>Questions:</strong> {examDetails.questions}
          </div>
          <div className="detail-item">
            <strong>Passing Score:</strong> {examDetails.passingScore}
          </div>
          <div className="detail-item">
            <strong>Cost:</strong> {examDetails.cost}
          </div>
          <div className="detail-item">
            <strong>Validity:</strong> {examDetails.validity}
          </div>
        </div>
      </div>

      <div className="key-topics">
        <h3>Key Topics Covered</h3>
        {keyTopics.map((category, index) => (
          <div key={index} className="topic-category">
            <h4>{category.category}</h4>
            <ul>
              {category.topics.map((topic, topicIndex) => (
                <li key={topicIndex}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="exam-tips">
        <h3>💡 Preparation Tips</h3>
        <ul>
          {examTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      <div className="certification-voucher">
        <h3>🎫 How to Apply for a Voucher</h3>
        <div className="application-steps">
          <div className="step">
            <span className="step-number">1</span>
            <div className="step-content">
              <h5>Visit Salesforce Certification Voucher Page</h5>
              <p>Go to the official Salesforce certification voucher application portal</p>
              <a 
                href="https://trailhead.salesforce.com/credentials/certification-vouchers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="voucher-link"
              >
                🎫 Apply for Voucher
              </a>
            </div>
          </div>
          
          <div className="step">
            <span className="step-number">2</span>
            <div className="step-content">
              <h5>Complete Application Form</h5>
              <p>Fill out the application with your personal information, eligibility proof, and PDF of Trailhead completion</p>
            </div>
          </div>
          
          <div className="step">
            <span className="step-number">3</span>
            <div className="step-content">
              <h5>Wait for Approval</h5>
              <p>Application review typically takes 5-10 business days</p>
            </div>
          </div>
          
          <div className="step">
            <span className="step-number">4</span>
            <div className="step-content">
              <h5>Receive Voucher Code</h5>
              <p>Once approved, you'll receive your voucher code via email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamOverview
