import React, { useState, useEffect } from "react";
import "./MockTrialGame.css";
import NavigationBar from './navigationbar'; 

function Option({ value, onClick, isSelected, isCorrect }) {
  return (
    <button
      className={`option ${isSelected ? (isCorrect ? "correct" : "incorrect") : ""}`}
      onClick={onClick}
      disabled={isSelected}
    >
      {value}
    </button>
  );
}

function Board({ question, imageSrc, options, onSelectAnswer, feedback, selectedOption, isGameOver, progress }) {
  return (
    <div className={`board ${isGameOver ? "game-over" : ""}`}>
      <div className="question-container">
        <img className="question-image" src={imageSrc} alt="Objection Visual" />
        <p className="question">{question}</p>
      </div>
      <div className="options-container">
        {options.map((option, index) => (
          <Option
            key={index}
            value={option}
            onClick={() => onSelectAnswer(option)}
            isSelected={selectedOption === option}
            isCorrect={option === feedback}
          />
        ))}
      </div>
      <div className={`feedback ${feedback ? (feedback === "Correct!" ? "correct" : "incorrect") : ""}`}>
        {feedback}
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

function MockTrialGame() {
  const questions = [
    "Bill told me he saw John commit murder.",
    "You saw the defendant running away from the scene, didn't you?",
    "The prosecutor shows a gruesome image that’s not essential to the case and distracts the judge from the case at bar",
    "The witness’s high school grades are brought up in a murder case",
    "The witness guesses what the defendant might have been thinking.",
    "The witness is not a medical expert but discusses the victim's injuries.",
    "An attorney presents evidence of a rumor they overheard outside the courtroom.",
    "A document is presented, but its authenticity has not been verified.",
    "The attorney repeatedly interrupts the witness during their testimony.",
    "The defendant is asked about a prior conviction unrelated to the current case.",
    "The witness refers to private conversations they overheard but weren’t involved in.",
    "An expert gives an opinion on a matter outside their area of expertise.",
  ];

  const solutions = [
    "hearsay",
    "leading",
    "unfairly prejudicial",
    "relevance",
    "speculation",
    "improper expert",
    "hearsay",
    "foundation",
    "badgering",
    "improper character evidence",
    "hearsay",
    "improper expert",
  ];

  const options = [
    ["hearsay", "leading", "speculation", "relevance"],
    ["leading", "hearsay", "relevance", "foundation"],
    ["unfairly prejudicial", "speculation", "leading", "relevance"],
    ["relevance", "speculation", "hearsay", "foundation"],
    ["speculation", "leading", "improper expert", "badgering"],
    ["improper expert", "leading", "relevance", "hearsay"],
    ["hearsay", "foundation", "leading", "improper character evidence"],
    ["foundation", "leading", "relevance", "badgering"],
    ["badgering", "speculation", "improper expert", "hearsay"],
    ["improper character evidence", "relevance", "foundation", "leading"],
    ["hearsay", "speculation", "foundation", "improper expert"],
    ["improper expert", "leading", "foundation", "speculation"],
  ];

  const images = [
    ["https://www.strategyskills.com/wp-content/uploads/Gavel-2048x1365.jpg"],
    ["https://www.criminaldefencelawyers.com.au/wp-content/uploads/2023/07/hearsay-scaled.jpg"],
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(30);
  const [progress, setProgress] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    setShuffledOptions(shuffleOptions(options[currentQuestion]));
  }, [currentQuestion]);

  useEffect(() => {
    if (timer === 0 || gameOver) return;
    const timerId = setInterval(() => setTimer(prev => prev - 1), 1000);
    return () => clearInterval(timerId);
  }, [timer, gameOver]);

  useEffect(() => {
    const storedQuestion = localStorage.getItem("completed question");
    if (storedQuestion != null) 
      {setCurrentQuestion(parseInt(storedQuestion) +1)}
  }, []);

  const shuffleOptions = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  const handleSelectAnswer = (selectedOption) => {
    if (selectedOption === solutions[currentQuestion]) {
      setFeedback("Correct!");
      setScore(score + 1);
      setProgress((currentQuestion + 1) * (100 / questions.length));
    } else {
      setFeedback("Incorrect. Try again.");
    }
    setSelectedOption(selectedOption);
  };

  const handleNextQuestion = () => {
    localStorage.setItem("completed question", currentQuestion);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setFeedback("");
      setTimer(30);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setFeedback("");
    setScore(0);
    setGameOver(false);
    setTimer(30);
    setProgress(0);
  };

  return (
    <div className="mock-trial-game">
      <NavigationBar />  

      <div className="sidebar">
        <h2>How to Play:</h2>
        <p>This game tests your knowledge of courtroom objections. For each question, you will see a scenario and a list of possible objections. Choose the correct objection from the list.</p>
        <h3>Objects Explained:</h3>
        <ul>
          <li><strong>Hearsay:</strong> Information not directly known by the witness.</li>
          <li><strong>Leading:</strong> A question that suggests its own answer.</li>
          <li><strong>Unfairly Prejudicial:</strong> Evidence that may bias the jury.</li>
          <li><strong>Relevance:</strong> The information must relate directly to the case.</li>
          <li><strong>Speculation:</strong> A witness guessing about something they don’t know.</li>
          <li><strong>Improper Expert:</strong> A witness offering expertise outside their qualifications.</li>
          <li><strong>Foundation:</strong> Ensuring the validity of evidence presented.</li>
          <li><strong>Badgering:</strong> An attorney aggressively questioning a witness.</li>
          <li><strong>Improper Character Evidence:</strong> Evidence about a person’s character that is not relevant.</li>
        </ul>
      </div>

      {gameOver ? (
        <div className="game-over">
          <h2>Game Over</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button className="restart-button" onClick={restartGame}>
            Restart Game
          </button>
        </div>
      ) : (
        <>
          <Board
            question={questions[currentQuestion]}
            imageSrc={images[currentQuestion]}
            options={shuffledOptions}
            onSelectAnswer={handleSelectAnswer}
            feedback={feedback}
            selectedOption={selectedOption}
            isGameOver={gameOver}
            progress={progress}
          />
          <div className="timer">Time Left: {timer}s</div>
          <button
            className="next-question-button"
            onClick={handleNextQuestion}
            disabled={!feedback || feedback !== "Correct!"}
          >
            {currentQuestion === questions.length - 1 ? "Finish Game" : "Next Question"}
          </button>
        </>
      )}
    </div>
  );
}

export default MockTrialGame;
