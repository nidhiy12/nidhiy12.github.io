import React, { useState } from "react";
import "./EnvironmentalLaw.css";
import NavigationBar from './navigationbar';

export default function EnvironmentalLaw() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What does environmental law primarily aim to protect?",
      options: ["Public health", "Natural resources", "Economic growth", "Property rights"],
      answer: "Natural resources"
    },
    {
      question: "Which act regulates air pollution in the U.S.?",
      options: ["Clean Air Act", "Endangered Species Act", "Water Pollution Control Act", "National Environmental Policy Act"],
      answer: "Clean Air Act"
    },
    {
      question: "Which case addressed the rights of citizens to sue for environmental harm?",
      options: ["Massachusetts v. EPA", "Brown v. Board of Education", "Tennessee Valley Authority v. Hill", "Roe v. Wade"],
      answer: "Massachusetts v. EPA"
    },
    {
      question: "What is the purpose of the Endangered Species Act?",
      options: ["Protect air quality", "Prevent the extinction of species", "Regulate water resources", "Control toxic waste"],
      answer: "Prevent the extinction of species"
    },
    {
      question: "Which law requires federal agencies to consider environmental impacts before taking action?",
      options: ["National Environmental Policy Act", "Clean Water Act", "Resource Conservation and Recovery Act", "Safe Drinking Water Act"],
      answer: "National Environmental Policy Act"
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
    <div className="environmental-law-page">
      <NavigationBar></NavigationBar>
      <header className="hero-section">
        <h1 className="hero-title">Environmental Law</h1>
        <p className="hero-subtitle">
          Learn about the laws that protect the environment and public health.
        </p>
      </header>

      <section className="section-content">
        <h2>What is Environmental Law?</h2>
        <img src = "https://www.scclegal.com/wp-content/uploads/2023/10/Navigating-Environmental-Law-and-Regulation-Expert-Insights.jpg" width ="600"></img>
        <p>
          Environmental law is designed to protect the environment by regulating pollution, conserving natural resources, and ensuring public health through rules set by the government. It helps control pollution, conserve natural resources, and make sure companies and people don't harm the air, water, or land. It also promotes sustainability and ensures that future generations have access to a healthy environment.
        </p>
      </section>

      <section className="section-content">
        <h2>Why Does Environmental Law Matter?</h2>
        <img src ="https://advocatetanwar.com/wp-content/uploads/2025/04/Environmental-Laws.jpg" width="600"></img>
        <p>
          Environmental law helps ensure a sustainable future by preventing pollution, conserving biodiversity, and addressing climate change. It protects both the environment and human health. Environmental law matters because it helps protect the planet and its resources. It ensures that air, water, and land stay clean and safe for people, animals, and plants. By preventing pollution and promoting sustainable practices, it helps fight climate change, preserve biodiversity, and ensure a healthier future for everyone. Without these laws, the environment could be damaged beyond repair, affecting our health and quality of life.








        </p>
      </section>

      <section className="section-content">
        <h2>Key Areas of Environmental Law</h2>
        <img src="https://media.istockphoto.com/id/974889858/vector/justice-balance-environment-green-button-background-on-blue-sky.jpg?s=612x612&w=0&k=20&c=QJeegYMuJIvtAt3pBjxGjmQq_4YISKGCzBR6iT1yORY=" width="400"></img>
        <ul>
          <li><strong>Air Quality:</strong> Laws that regulate air pollution and promote clean air standards.</li>
          <li><strong>Water Quality:</strong> Laws governing the protection of water resources from contamination.</li>
          <li><strong>Waste Management:</strong> Regulates the disposal and recycling of waste materials.</li>
          <li><strong>Conservation:</strong> Focuses on protecting endangered species and preserving natural habitats.</li>
        </ul>
      </section>

      <section className="section-content">
        <h2>Important Environmental Law Cases</h2>
        <ul>
          <li><strong>Massachusetts v. EPA (2007):</strong> Established the EPA's authority to regulate greenhouse gases.</li>
          <li><strong>Tennessee Valley Authority v. Hill (1978):</strong> Concerned the protection of endangered species in the construction of a dam.</li>
          <li><strong>Chevron v. NRDC (1984):</strong> Addressed the interpretation of environmental regulations by federal agencies.</li>
          <li><strong>Clean Air Act (1963):</strong> A federal law that regulates air pollution in the US.</li>

        </ul>
      </section>

      <section className="section-content">
        <h2>Environmental Law in Everyday Life</h2>
        <img src="https://www.law.gwu.edu/sites/g/files/zaxdzs5421/files/styles/de2e/public/2025-02/2025-shapiro-header.png?itok=I52haFmX" width="400"></img>
        <p>
          Environmental laws affect our daily lives by ensuring clean air and water, safe disposal of waste, and the preservation of natural spaces for future generations. Environmental law impacts daily life by regulating things like the quality of the air we breathe, the water we drink, and the waste we produce. For example, it sets rules for companies to reduce pollution, ensures safe disposal of trash and hazardous materials, and protects wildlife and natural spaces. It also encourages recycling and energy-saving practices. When you buy eco-friendly products or follow recycling rules, you're indirectly following the principles of environmental law, which help reduce the negative impact on the planet.








        </p>
      </section>

      <section className="section-content">
        <h2>Test Your Knowledge!</h2>
        <p>Think you know environmental law? Try this quick game to find out!</p>
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
