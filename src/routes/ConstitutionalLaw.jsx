import React, { useState } from "react";
import "./ConstitutionalLaw.css";
import NavigationBar from './navigationbar';

export default function ConstitutionalLaw() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is the primary focus of constitutional law?",
      options: ["Regulating businesses", "Interpreting and applying the Constitution", "Criminal prosecution", "Tax collection"],
      answer: "Interpreting and applying the Constitution"
    },
    {
      question: "Which case established judicial review in the U.S.?",
      options: ["Brown v. Board of Education", "Marbury v. Madison", "Miranda v. Arizona", "Roe v. Wade"],
      answer: "Marbury v. Madison"
    },
    {
      question: "What does the First Amendment protect?",
      options: ["The right to vote", "Freedom of speech, religion, and press", "Protection against self-incrimination", "Right to bear arms"],
      answer: "Freedom of speech, religion, and press"
    },
    {
      question: "Which branch of government is responsible for interpreting the Constitution?",
      options: ["Executive", "Legislative", "Judicial", "Military"],
      answer: "Judicial"
    },
    {
      question: "Which case ruled that segregation in public schools was unconstitutional?",
      options: ["Plessy v. Ferguson", "Dred Scott v. Sandford", "Brown v. Board of Education", "Gideon v. Wainwright"],
      answer: "Brown v. Board of Education"
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
    <div className="constitutional-law-page">
      <NavigationBar></NavigationBar>
      <header className="hero-section">
        <h1 className="hero-title">Constitutional Law</h1>
        <p className="hero-subtitle">
          Understanding the fundamental principles of the Constitution and its impact on governance.
        </p>
      </header>

      <section className="section-content">
      
        <h2>What is Constitutional Law?</h2>
       <img src = "https://testmaxprep.s3.us-west-2.amazonaws.com/images/web/blog/blog_image/blog_full_constitutional-law.jpg" width="500" ></img>
        <p>
          Constitutional law governs the interpretation and implementation of the Constitution. It defines the structure of government and protects individual rights. Constitutional law is all about how the Constitution works and how the government follows it. It explains how the government is set up, like the roles of the president, Congress, and the courts, and makes sure no part of the government gets too powerful.

It also protects people’s rights, like freedom of speech and the right to a fair trial. If a law or action goes against the Constitution, constitutional law helps make sure it gets fixed, so everyone’s rights are protected.
        </p>
      </section>

      <section className="section-content">
        <h2>Why Does Constitutional Law Matter?</h2>
        <p>
          Constitutional law ensures the protection of fundamental rights and limits government power. It upholds democracy and the rule of law. Constitutional law ensures the protection of fundamental rights, like freedom of speech and the right to privacy, by making sure the government doesn't violate them. It also limits government power by setting rules about what the government can and can't do, preventing any part of the government from becoming too powerful.

This helps uphold democracy by making sure leaders are held accountable and that people’s voices are heard. It also supports the rule of law, meaning everyone, including the government, must follow the law and act fairly.
        </p>
      </section>

      <section className="section-content">
        <h2>Key Areas of Constitutional Law</h2>
        <img src = "https://wausaupilotandreview.com/wp-content/uploads/2018/05/Screen-Shot-2018-04-27-at-3.39.52-PM.png" width="300"></img>
        <ul>
          <li><strong>Separation of Powers:</strong> Divides government responsibilities among branches. Dividing government responsibilities among branches is a key part of the Constitution, ensuring that no single branch of government becomes too powerful. The government is split into three branches: the executive, legislative, and judicial.

The executive branch, led by the president, is responsible for enforcing laws and managing the country’s affairs.
The legislative branch, made up of Congress, is responsible for making laws.
The judicial branch, which includes the courts, is responsible for interpreting laws and ensuring they are applied fairly.</li>
          <li><strong>Bill of Rights:</strong> Protects individual freedoms and rights. The Bill of Rights is the first ten amendments to the U.S. Constitution, and it protects essential individual freedoms and rights. These include freedoms like speech, religion, and the press, as well as protections against unfair treatment, such as the right to a fair trial and the right to bear arms. The Bill of Rights ensures that the government cannot violate these basic freedoms, providing a foundation for protecting citizens’ rights in all areas of life.

</li>
          <li><strong>Judicial Review:</strong> Courts can declare laws unconstitutional. Judicial review is the power of the courts to review laws and government actions to make sure they follow the Constitution. If a law is found to violate the Constitution, the courts can declare it unconstitutional, which means it is no longer valid. This power helps keep the government in check and ensures that laws are consistent with the Constitution's protections for citizens’ rights.</li>
          <li><strong>Federalism:</strong> Defines the relationship between state and federal governments. Federalism is the system that divides power between the national (federal) government and state governments. It allows each level of government to have authority over certain areas, such as the federal government handling national defense and foreign relations, while state governments manage local matters like education and police powers. This division ensures that no one level of government has too much control, and it allows states to govern in ways that best meet the needs of their own people.</li>
        </ul>
      </section>

      <section className="section-content">
        <h2>Important Constitutional Law Cases</h2>
        <ul>
          <img src = "https://img.newspapers.com/img/img?user=6960564&id=570833418&clippingId=34846302&width=820&height=480&crop=207_160_3654_2143&rotation=0" width ="300"></img>
          <li><strong>Marbury v. Madison (1803):</strong> Established judicial review.</li>
          <li><strong>Brown v. Board of Education (1954):</strong> Declared segregation in schools unconstitutional.</li>
          <li><strong>Miranda v. Arizona (1966):</strong> Established Miranda rights for suspects.</li>
          <li><strong>Roe v. Wade (1973):</strong> Addressed the right to privacy and abortion rights.</li>
        </ul>
      </section>

      <section className="section-content">
        <h2>Constitutional Law in Everyday Life</h2>
        <p>
          Constitutional law affects voting rights, free speech, privacy, and many other aspects of daily life. It ensures government accountability and individual freedoms. Constitutional law plays a big role in our daily lives by protecting our rights and ensuring the government acts fairly. It affects important areas like:

Voting rights, making sure that everyone has the right to vote and that elections are fair and free.
Free speech, protecting your ability to express your opinions and ideas without fear of government punishment.
Privacy, ensuring that your personal information and actions are protected from unwarranted government intrusion.
It also ensures government accountability, meaning the government has to follow the rules and can't abuse its power. Constitutional law keeps checks and balances in place, ensuring individual freedoms are protected, and that everyone has the right to challenge unfair laws or actions.
        </p>
      </section>

      <section className="section-content">
        <h2>Test Your Knowledge!</h2>
        <p>Think you know constitutional law? Try this quick game to find out!</p>
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
