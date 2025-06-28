import React, { useState } from "react";
import "./Amendments.css";
import NavigationBar from './navigationbar';


const amendmentsInfo = [
  { number: 1, text: "Freedom of speech, religion, press, assembly, and petition." },
  { number: 2, text: "Right to bear arms." },
  { number: 4, text: "Protection from unreasonable searches and seizures." },
  { number: 5, text: "Protection against self-incrimination and double jeopardy." },
  { number: 6, text: "Right to a speedy and public trial." },
  { number: 8, text: "No cruel and unusual punishment." },
  { number: 13, text: "Abolition of slavery." },
  { number: 14, text: "Equal protection under the law." },
  { number: 19, text: "Women's suffrage." },
  { number: 22, text: "Presidential term limits." },
  { number: 26, text: "Voting age set to 18." },
];

function AmendmentCard({ amendment }) {
  return (
    <div className="amendment-card">
      <h2>Amendment {amendment.number}</h2>
      <p>{amendment.text}</p>
    </div>
  );
}




function AmendmentsPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Which amendment abolished slavery?",
      options: ["13th", "10th", "15th", "5th"],
      correct: "13th",
      explanation: "The 13th Amendment abolished slavery in the United States in 1865."
    },
    {
      question: "Which amendment grants women the right to vote?",
      options: ["14th", "19th", "22nd", "1st"],
      correct: "19th",
      explanation: "The 19th Amendment, ratified in 1920, granted women the right to vote."
    },
    {
      question: "Which amendment protects against self-incrimination?",
      options: ["3rd", "5th", "8th", "12th"],
      correct: "5th",
      explanation: "The 5th Amendment includes protection against self-incrimination and double jeopardy."
    },
    {
      question: "Which amendment set the voting age to 18?",
      options: ["15th", "22nd", "26th", "20th"],
      correct: "26th",
      explanation: "The 26th Amendment lowered the voting age to 18 in response to the Vietnam War."
    },
  ];

  const handleSelectAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].correct) {
      setFeedback("Correct!");
      setScore(score + 1);
    } else {
      setFeedback(`Incorrect. ${questions[currentQuestion].explanation}`);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setFeedback("");
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="amendments-page">
      <NavigationBar></NavigationBar>
      <header className="hero-section">
        <h1 className="hero-title">The U.S. Amendments</h1>
        <p className="hero-subtitle">Learn about the rights and freedoms that shape our nation.</p>
      </header>

      <div className="section-content">
        <h2>Overview of Amendments</h2>
        <p>The amendments to the U.S. Constitution are essential legal protections for citizens. Here are some of the most notable ones:</p>
        <div className="amendments-list">
          {amendmentsInfo.map((amendment, index) => (
            <AmendmentCard key={index} amendment={amendment} />
          ))}
        </div>
      </div>
      
      <div className="section-content quiz-section">
        {showResults ? (
          <div className="results">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score} / {questions.length}</p>
            <button onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setSelectedOption(null);
              setFeedback("");
              setShowResults(false);
            }}>Play Again</button>
          </div>
        ) : (
          <>
            <h2>{questions[currentQuestion].question}</h2>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button 
                  key={index} 
                  className={`option-btn ${selectedOption === option ? (option === questions[currentQuestion].correct ? "correct" : "incorrect") : ""}`} 
                  onClick={() => handleSelectAnswer(option)}
                  disabled={selectedOption}
                >
                  {option}
                </button>
              ))}
            </div>
            {feedback && <p className="feedback">{feedback}</p>}
            <button 
              className="next-btn" 
              onClick={handleNextQuestion} 
              disabled={!selectedOption}
            >
              Next Question
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default AmendmentsPage;
