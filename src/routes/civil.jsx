import React, { useState } from "react";
import "./civil.css";
import NavigationBar from './navigationbar';

export default function CivilLaw() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What does civil law primarily deal with?",
      options: ["Criminal offenses", "Disputes between individuals", "Government policies", "International relations"],
      answer: "Disputes between individuals"
    },
    {
      question: "Which case ended racial segregation in schools?",
      options: ["Roe v. Wade", "Brown v. Board of Education", "Loving v. Virginia", "Marbury v. Madison"],
      answer: "Brown v. Board of Education"
    },
    {
      question: "What is the standard of proof in civil law cases?",
      options: ["Beyond a reasonable doubt", "Clear and convincing evidence", "Preponderance of evidence", "Absolute certainty"],
      answer: "Preponderance of evidence"
    },
    {
      question: "Which area of civil law deals with personal injury and negligence?",
      options: ["Contracts", "Torts", "Family Law", "Property Law"],
      answer: "Torts"
    },
    {
      question: "What is the typical resolution in a civil case?",
      options: ["Prison sentence", "Fines and damages", "Community service", "House arrest"],
      answer: "Fines and damages"
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
    <div className="civil-law-page">
      <NavigationBar></NavigationBar>
      <header className="hero-section">
        <h1 className="hero-title">Civil Law</h1>
        <p className="hero-subtitle">
          Solving everyday conflicts and protecting individual rights in society.
        </p>
      </header>

      <section className="section-content">
        <h2>What is Civil Law?</h2>
        <p>
          Civil law is all about solving disputes between people, businesses, or groups. Unlike criminal law, which deals with crimes, civil law helps people get fair outcomes when things go wrong, whether it's a broken contract, a property disagreement, or family issues. If someone feels wronged, civil law can help them seek compensation or a solution to the problem. For example, if someone breaks a contract, they might have to pay money to fix the situation. This type of law helps keep society running smoothly by making sure everyone follows agreements and handles disagreements in an organized way.
        </p>
        <p>
          Instead of jail time, civil law usually leads to financial compensation or specific actions to fix the issue. It covers important areas like contracts, property rights, family matters, and personal injuries.
          
        </p>
        <img src ="https://www.hhrlaw.com/images/blog/Civil-Law.2205171359271.jpg" width="600"></img>
      </section>

      <section className="section-content">
        <h2>Why Does Civil Law Matter?</h2>
        <p>
          Civil law is essential because it helps keep society fair and balanced. Imagine a world where broken promises had no consequences or where companies could sell faulty products without accountability. Civil law makes sure that people and businesses follow the rules and take responsibility for their actions. Civil law also creates a system where people can resolve problems peacefully, without resorting to violence or chaos. By using courts and legal processes, individuals and businesses can settle disagreements in an organized way. It gives everyone the opportunity to seek fairness, whether they're seeking compensation for harm or simply trying to enforce a legal agreement.


        </p>
        <p>
          It also provides protection for vulnerable individuals, like workers who face unfair treatment or families dealing with custody disputes. Civil law ensures that everyone has a voice and a way to seek justice.
        </p>
      </section>

      <section className="section-content">
        <h2>Key Areas of Civil Law</h2>
        <ul>
          <li>
            <strong>Contracts:</strong> If someone breaks an agreement, civil law helps ensure fairness and compensation.  If someone breaks an agreement, civil law helps ensure fairness and compensation by allowing the wronged party to seek damages or specific performance, compelling the other party to fulfill their part of the contract or pay for the breach.
          </li>
          <li>
            <strong>Torts:</strong> This covers personal injury, defamation, and negligence, ensuring people get justice if they’re harmed. This covers personal injury, defamation, and negligence, ensuring people get justice if they’re harmed. If someone is injured because of another's actions—whether it’s an accident or harmful behavior—they can seek compensation for medical costs, lost wages, and pain and suffering.
          </li>
          <li>
            <strong>Property Disputes:</strong> Helps resolve conflicts over property ownership and usage rights. Helps resolve conflicts over property ownership and usage rights by clarifying who has legal control over a piece of land or property. This can include disagreements between neighbors, landlords and tenants, or business partners.
          </li>
          <li>
            <strong>Family Law:</strong> Covers divorce, child custody, and adoption, focusing on fair outcomes for families. Covers divorce, child custody, and adoption, focusing on fair outcomes for families. It ensures that children’s best interests are prioritized during custody disputes and helps families navigate changes like adoption or separation in a way that minimizes harm.
          </li>
          <li>
            <strong>Standard of Proof:</strong> Civil cases require proof that something is “more likely than not” to be true, which is a lower standard than in criminal cases. Civil cases require proof that something is “more likely than not” to be true, which is a lower standard than in criminal cases. This means that in civil law, the evidence only needs to show that there’s a greater than 50% chance that a claim is accurate, making it easier for plaintiffs to win compared to the "beyond a reasonable doubt" standard in criminal law.
          </li>
          <img src = "https://www.radeylaw.com/wp-content/uploads/Standards-of-Proof-2-1536x1195.png" width = "400"></img>
        </ul>
      </section>

      <section className="section-content">
        <h2>Important Civil Law Cases</h2>
        <img src = "https://www.gse.harvard.edu/sites/default/files/styles/16x9__focal_point_scale_and_crop__xl--2x/public/content-images/1500x750-ed-brown-cover.webp?h=16a6ccf5&itok=gHRLyyQ9" width="400" ></img>
        <ul>
          <li>
            <strong>Brown v. Board of Education (1954):</strong> Ended racial segregation in schools.
            
          </li>
          <li>
            <strong>Roe v. Wade (1973):</strong> Influenced privacy rights and medical decisions.
          </li>
          <li>
            <strong>Marbury v. Madison (1803):</strong> Established judicial review, shaping how laws are interpreted.
          </li>
          <li>
            <strong>Loving v. Virginia (1967):</strong> Allowed interracial marriage, promoting personal freedoms.
          </li>
        </ul>
      </section>

      <section className="section-content">
        <h2>Civil Law in Everyday Life</h2>
        <img src = "https://res.cloudinary.com/debi2p5ek/image/upload/w_1140/v1/1932/60978-contract-paper-and-pen-5e0e64b8.jpg" width="500"></img>

        <p>
          Civil law affects you more than you might think! Have you ever signed up for a gym membership or made an online purchase? Those are contracts, and if something goes wrong, civil law protects your rights. Civil law affects you more than you might think! Have you ever signed up for a gym membership or made an online purchase? Those are contracts, and if something goes wrong, civil law protects your rights by giving you a way to hold companies accountable, whether it's for poor service or faulty products.

It also helps employees get fair pay, renters solve disputes with landlords, and even protects your privacy online. If an employer fails to pay you correctly or a landlord doesn’t keep their promises, civil law provides a way to seek compensation. Additionally, it ensures that personal information you share online is safeguarded. Without civil law, there would be no structured way to resolve these everyday issues fairly, leaving individuals vulnerable to unfair practices and injustices.
        </p>
        <p>
          It also helps employees get fair pay, renters solve disputes with landlords, and even protects your privacy online. Without civil law, there would be no structured way to resolve these everyday issues fairly.
        </p>
      </section>

      <section className="section-content">
        <h2>Test Your Knowledge!</h2>
        <p>Ready to see what you've learned? Try this quick game and test your knowledge of civil law.</p>
        <div className="game-container">
          {showResults ? (
            <div>
              <p>Your score: {score} / {questions.length}</p>
              <button onClick={() => { setQuestionIndex(0); setScore(0); setShowResults(false); }}>Play Again</button>
            </div>
          ) : (
            <div>
              <p>{questions[questionIndex].question}</p>
              {questions[questionIndex].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerClick(option)}>{option}</button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
