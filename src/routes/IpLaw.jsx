import React, { useState } from "react";
import "./IpLaw.css";
import NavigationBar from './navigationbar';

export default function IPLaw() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What does intellectual property law protect?",
      options: ["Real estate", "Original creations of the mind", "Government documents", "Natural resources"],
      answer: "Original creations of the mind"
    },
    {
      question: "Which type of IP protects an inventor’s exclusive rights?",
      options: ["Trademark", "Copyright", "Patent", "Trade secret"],
      answer: "Patent"
    },
    {
      question: "What qualifies as a trade secret?",
      options: ["Public records", "Business cards", "Confidential competitive info", "Patent filings"],
      answer: "Confidential competitive info"
    },
    {
      question: "How long does a typical copyright last?",
      options: ["25 years", "Life of author + 70 years", "Forever", "10 years"],
      answer: "Life of author + 70 years"
    },
    {
      question: "What does a trademark protect?",
      options: ["Creative writings", "Brand identifiers like logos or slogans", "Inventions", "Musical compositions"],
      answer: "Brand identifiers like logos or slogans"
    }
  ];

  const handleAnswerClick = (option) => {
    if (option === questions[questionIndex].answer) {
      setScore(score + 1);
    }

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="corporate-law-page">
      <NavigationBar />

      <header className="hero-section">
        <h1 className="hero-title">Intellectual Property Law</h1>
        <p className="hero-subtitle">Safeguarding creativity, innovation, and brand identity.</p>
      </header>

      <section className="section-content">
        <h2>What is Intellectual Property (IP)?</h2>
        <p>
          Intellectual Property Law is designed to protect the rights of individuals and companies to control and benefit from their creations and ideas. It includes legal protections for inventions, written works, music, symbols, names, images, and designs.
        </p>
        <p>
          These protections encourage innovation by granting exclusive rights to creators for a limited time, allowing them to profit from their work. IP law plays a critical role in industries ranging from tech and fashion to film and pharmaceuticals.
        </p>
        <img className="centered-image" src="https://www.edology.com/media/1978/download/blogchoose-intellectual-property-law-s.png?v=1" width="600" />
      </section>

      <section className="section-content">
        <h2>Types of Intellectual Property</h2>
        <ul>
          <li><strong>Copyright:</strong> Protects original literary, artistic, and musical works. Lasts for the creator’s lifetime plus 70 years.</li>
          <li><strong>Patent:</strong> Protects inventions, granting the creator exclusive rights for up to 20 years.</li>
          <li><strong>Trademark:</strong> Protects brand names, logos, and slogans used to identify goods or services.</li>
          <li><strong>Trade Secret:</strong> Protects confidential business information like formulas or strategies that provide a competitive edge.</li>
        </ul>
        <img className="centered-image" src="https://copyright.laws.com/wp-content/uploads/sites/33/2019/12/1_copyright-designs-and-patents-act-1988.jpg" width="600"/>
      </section>

      <section className="section-content">
        <h2>Why Intellectual Property Matters</h2>
        <p>
          IP laws promote progress by rewarding creativity and investment. They give artists, engineers, entrepreneurs, and businesses legal ownership of their ideas and innovations.
        </p>
        <p>
          Without IP protections, anyone could copy, steal, or sell your ideas — which would discourage innovation. With strong IP systems, creators are more likely to share their work, knowing it will be respected and protected.
        </p>
      </section>

      <section className="section-content">
        <h2>Real-World IP Law Cases</h2>
        <ul>
          <li><strong>Apple v. Samsung:</strong> Patent war over smartphone designs and functions — resulted in billion-dollar settlements.</li>
          <li><strong>Marvel v. Jack Kirby Estate:</strong> Dispute over copyrights for famous comic characters like X-Men and Iron Man.</li>
          <li><strong>Google v. Oracle:</strong> Case over Java code — set precedent for software copyright limits.</li>
          <li><strong>Coca-Cola Trade Secret:</strong> The formula for Coke is one of the most famously guarded trade secrets in the world.</li>
        </ul>
        <img className="centered-image" src="https://b3333796.smushcdn.com/3333796/wp-content/uploads/2023/04/Intellectual-Property-Rights-in-India-1280x720-1-1110x630.jpeg?lossy=2&strip=1&webp=1" width="600" />
      </section>

      <section className="section-content">
        <h2>IP in Daily Life</h2>
        <p>
          Every time you stream a song, use a branded product, or download an app, you're interacting with protected intellectual property. IP is behind the scenes in everything from social media algorithms to sneaker designs.
        </p>
        <p>
          If we didn’t have IP protections, businesses couldn’t build trustworthy brands, artists couldn’t earn a living from their work, and tech companies would hesitate to innovate. IP law touches almost every part of modern life.
        </p>
      </section>

      <section className="section-content">
        <h2>Test Your Knowledge!</h2>
        <p>Take this quiz to see how much you’ve learned about IP law.</p>
        <div className="quiz-board">
          {showResults ? (
            <div>
              <p>Your score: {score} / {questions.length}</p>
              <button onClick={() => { setQuestionIndex(0); setScore(0); setShowResults(false); }}>Play Again</button>
            </div>
          ) : (
            <div>
              <p>{questions[questionIndex].question}</p>
              <div className="options-container">
                {questions[questionIndex].options.map((option, index) => (
                  <button key={index} className="option" onClick={() => handleAnswerClick(option)}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
