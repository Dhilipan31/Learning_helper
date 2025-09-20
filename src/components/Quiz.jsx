import React, { useState } from 'react'
import { allQuestions } from '../data/quizQuestions'

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Function to get 5 random questions
  const getRandomQuestions = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 5)
  }

  const [questions, setQuestions] = useState(getRandomQuestions())

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex
    })
  }

  const handleSubmit = () => {
    setSubmitted(true)
    setShowResults(true)
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    setSubmitted(false)
    // Get new random questions
    const newQuestions = getRandomQuestions()
    setQuestions(newQuestions)
  }

  const getScore = () => {
    let correct = 0
    questions.forEach(question => {
      if (Array.isArray(question.correct)) {
        // Handle multiple correct answers
        const userAnswers = selectedAnswers[question.id]
        if (Array.isArray(userAnswers) && 
            userAnswers.length === question.correct.length &&
            userAnswers.every(answer => question.correct.includes(answer))) {
          correct++
        }
      } else {
        // Handle single correct answer
        if (selectedAnswers[question.id] === question.correct) {
          correct++
        }
      }
    })
    return correct
  }

  const getScorePercentage = () => {
    return Math.round((getScore() / questions.length) * 100)
  }

  const getScoreMessage = () => {
    const percentage = getScorePercentage()
    if (percentage >= 80) {
      return "Excellent! You're well prepared for the certification exam! 🎉"
    } else if (percentage >= 60) {
      return "Good job! Consider reviewing some topics before taking the exam. 📚"
    } else {
      return "Keep studying! Review the exam materials and try again. 💪"
    }
  }

  const isAnswerCorrect = (question) => {
    if (Array.isArray(question.correct)) {
      const userAnswers = selectedAnswers[question.id]
      return Array.isArray(userAnswers) && 
             userAnswers.length === question.correct.length &&
             userAnswers.every(answer => question.correct.includes(answer))
    } else {
      return selectedAnswers[question.id] === question.correct
    }
  }

  if (showResults) {
    return (
      <div className="section">
        <h2>🧠 Data Cloud Certification Quiz Results</h2>
        
        <div className="quiz-results">
          <div className="score-summary">
            <h3>Your Score: {getScore()}/{questions.length} ({getScorePercentage()}%)</h3>
            <p className="score-message">{getScoreMessage()}</p>
          </div>

          <div className="detailed-results">
            <h4>Question Review:</h4>
            {questions.map((question, index) => {
              const isCorrect = isAnswerCorrect(question)
              
              return (
                <div key={question.id} className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="result-header">
                    <span className="result-icon">{isCorrect ? '✅' : '❌'}</span>
                    <h5>Question {index + 1}</h5>
                  </div>
                  <p className="result-question">{question.question}</p>
                  <div className="result-answers">
                    <div className="user-answer">
                      <strong>Your Answer:</strong> {
                        Array.isArray(selectedAnswers[question.id]) 
                          ? selectedAnswers[question.id].map(i => question.options[i]).join(', ')
                          : question.options[selectedAnswers[question.id]] || 'Not answered'
                      }
                    </div>
                    {!isCorrect && (
                      <div className="correct-answer">
                        <strong>Correct Answer:</strong> {
                          Array.isArray(question.correct)
                            ? question.correct.map(i => question.options[i]).join(', ')
                            : question.options[question.correct]
                        }
                      </div>
                    )}
                    <div className="explanation">
                      <strong>Explanation:</strong> {question.explanation}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="quiz-actions">
            <button onClick={handleRestart} className="restart-button">
              🔄 Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="section">
      <h2>🧠 Data Cloud Certification Quiz</h2>
      <p className="section-description">
        Test your knowledge with this 5-question quiz covering key Data Cloud certification topics. 
        Each quiz randomly selects 5 questions from our comprehensive question bank. Choose the best answer for each question and submit to see your results!
      </p>

      <div className="quiz-container">
        <div className="quiz-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <p className="progress-text">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="question-container">
          <h3 className="question-text">
            {questions[currentQuestion].question}
          </h3>

          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <label 
                key={index} 
                className={`option-label ${selectedAnswers[questions[currentQuestion].id] === index ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name={`question-${questions[currentQuestion].id}`}
                  value={index}
                  checked={selectedAnswers[questions[currentQuestion].id] === index}
                  onChange={() => handleAnswerSelect(questions[currentQuestion].id, index)}
                />
                <span className="option-text">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="quiz-navigation">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="nav-button prev-button"
          >
            ← Previous
          </button>

          <div className="question-indicators">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`indicator ${index === currentQuestion ? 'active' : ''} ${
                  selectedAnswers[questions[index].id] !== undefined ? 'answered' : ''
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(selectedAnswers).length !== questions.length}
              className="submit-button"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
              className="nav-button next-button"
            >
              Next →
            </button>
          )}
        </div>

        <div className="quiz-info">
          <p>💡 Tip: You can navigate between questions using the numbered buttons above.</p>
          <p>📝 Make sure to answer all questions before submitting!</p>
          <p>🎲 Each quiz randomly selects 5 questions from our comprehensive question bank!</p>
        </div>
      </div>
    </div>
  )
}

export default Quiz
