import React, { useState } from "react";
import "./CorporateLaw.css";
import NavigationBar from './navigationbar';

export default function CorporateLaw() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is the primary focus of corporate law?",
      options: ["Criminal activities", "Regulating businesses and corporations", "International relations", "Tax collection"],
      answer: "Regulating businesses and corporations"
    },
    {
      question: "Which case established corporate personhood in the U.S.?",
      options: ["Marbury v. Madison", "Citizens United v. FEC", "Dartmouth College v. Woodward", "Brown v. Board of Education"],
      answer: "Dartmouth College v. Woodward"
    },
    {
      question: "What is a key responsibility of corporate law?",
      options: ["Punishing criminal offenses", "Overseeing company mergers and acquisitions", "Handling family disputes", "Setting education policies"],
      answer: "Overseeing company mergers and acquisitions"
    },
    {
      question: "Which of the following is a major area of corporate law?",
      options: ["Employment Law", "Contract Law", "Securities Regulation", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is a corporation?",
      options: ["A small business", "A legal entity separate from its owners", "A type of contract", "A government agency"],
      answer: "A legal entity separate from its owners"
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
      <NavigationBar></NavigationBar>
      <header className="hero-section">
        <h1 className="hero-title">Corporate Law</h1>
        <p className="hero-subtitle">
          Governing businesses and ensuring fair practices in the corporate world.
        </p>
      </header>

      <section className="section-content">
        <h2>What is Corporate Law?</h2>
        <img src="https://www.runsensible.com/wp-content/uploads/2024/08/Understanding-Corporate-Law-and-its-Importance-in-Businesses.jpg" width="600" ></img> 
        <p>
          
        </p>
        <p>
          This field of law covers everything from company formation and mergers to shareholder rights and corporate governance. Corporate law is the set of rules that govern how businesses are formed, operated, and regulated. It covers everything from starting a company and choosing its legal structure to managing daily operations and ensuring compliance with laws. Corporate law also deals with mergers and acquisitions, where businesses buy, sell, or merge with others. Companies must follow regulations on taxes, fair competition, and consumer protection while ensuring contracts and agreements are legally sound. Business leaders have a responsibility to act in the best interest of their company and its owners. Overall, corporate law helps keep businesses fair, accountable, and legally protected.








        </p>
      </section>

      <section className="section-content">
        <h2>Why Does Corporate Law Matter?</h2>
        <p>
          Corporate law plays a crucial role in protecting investors, employees, and consumers. Without it, businesses could engage in unfair or unethical practices without accountability.
        </p>
        <p>
          It also fosters economic growth by ensuring companies compete fairly and operate efficiently. Corporate law matters because it helps businesses run fairly and follow the rules. It makes sure companies treat their owners, workers, and customers properly. Without these laws, businesses could cheat people or break promises. Corporate law also helps companies solve problems, make legal agreements, and follow important rules, like paying taxes or keeping workers safe. It helps businesses grow and succeed in a way that’s good for everyone, and it builds trust in the market. Basically, corporate law keeps things fair and prevents businesses from doing things that could harm others.








        </p>
      </section>

      <section className="section-content">
        <h2>Key Areas of Corporate Law</h2>
        <ul>
          <li>
            <strong>Business Formation:</strong> Governs how businesses are created and structured. Corporate law defines how businesses are created, including the legal steps to establish ownership and structure. It also decides the type of entity (like an LLC or corporation) ensuring that businesses are recognized and protected under the law.
          </li>
          <li>
            <strong>Corporate Governance:</strong>  Corporate governance establishes the rules for how a company is managed, ensuring leaders act in the best interests of shareholders. It includes checks and balances to prevent conflicts of interest and ensure ethical decision-making at all levels of the company. Basically, it ensures businesses follow ethical and legal rules.
          </li>
          <li>
            <strong>Mergers & Acquisitions:</strong>  M&A law governs how companies combine or buy each other, including legal procedures for valuation, contracts, and approvals. These laws ensure that the process is fair, transparent, and protects all parties involved, including employees and shareholders. It regulates company mergers and takeovers.
          </li>
          <li>
            <strong>Securities Law:</strong> : Securities law regulates the trading of stocks, bonds, and other financial instruments to protect investors. It ensures that companies disclose important financial information to the public and prevents market manipulation and fraud. It oversees how stocks and investments are handled.
          </li>
          <li>
            <strong>Employment Law:</strong> Employment law ensures that workers are treated fairly and that their rights are protected in the workplace. It includes rules on wages, workplace safety, discrimination, and the fair treatment of employees. It protects workers' rights within companies.
            <img src = "https://aegislaw.com/wp-content/uploads/2023/03/Blog-Image_3_031623.jpg" width="500"></img>
          </li>
        </ul>
      </section>

      <section className="section-content">
        <h2>Important Corporate Law Cases</h2>
        <ul>
          <li>
            <strong>Dartmouth College v. Woodward (1819):</strong> Defined corporate personhood and protected private contracts. <img src="https://campaignlegal.org/sites/default/files/styles/2000x765/public/2020-01/G18AP8.jpg?h=5233092d&itok=M8R1rG52" width="600" ></img>
          </li>
          <li>
            <strong>Citizens United v. FEC (2010):</strong> Impacted corporate political spending rights.
          </li>
          <li>
            <strong>SEC v. W.J. Howey Co. (1946):</strong> Established the test for investment contracts.
          </li>
          <li>
            <strong>Enron Scandal (2001):</strong> Led to reforms in corporate financial accountability (Sarbanes-Oxley Act).
          </li>
        </ul>
      </section>

      <section className="section-content">
        <h2>Corporate Law in Everyday Life</h2>
        <p>
          Whether you're an employee, investor, or consumer, corporate law affects you! It ensures fair wages, protects investments, and prevents companies from misleading consumers.
        </p>
        <p>
          From signing up for a new job to buying stocks, corporate law plays a role in keeping business practices ethical and transparent. Corporate law is like the behind-the-scenes referee that makes sure businesses play fair. Imagine you’re shopping online, and a company promises to deliver your shoes in three days—corporate law ensures they keep that promise and that you get your money back if they don’t. It’s also the reason your favorite company can’t just fire people for no reason; employment law makes sure workers are treated fairly. Ever notice those safety labels on products? That’s corporate law making sure they’re up to code! And when big companies join forces, it can mean new products or even a better deal for you, thanks to laws that make sure the merger is fair. Corporate law might not always be in the spotlight, but it’s definitely the invisible hand that keeps things running smoothly!








        </p>
      </section>

      <section className="section-content">
        <h2>Test Your Knowledge!</h2>
  
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
