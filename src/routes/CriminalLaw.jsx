import React from "react";
import "./CriminalLaw.css";
import NavigationBar from "./navigationbar";


export default function CriminalLaw() {
  
  return (
    <div className="criminal-law-page">
      <NavigationBar></NavigationBar>
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Criminal Law</h1>
          <p className="hero-subtitle">
            A guide to understanding the laws that govern crime, justice, and rehabilitation in society.
          </p>
        </div>
      </header>

      <section className="section-content">
        <h2>About Criminal Law</h2>
        <img src="https://assets.everspringpartners.com/dims4/default/a7509d1/2147483647/strip/true/crop/1600x646+0+0/resize/1600x646!/format/webp/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2F6b%2F19%2F381453434f2faa5162059a38f66f%2Fpitt-intro-criminal-law.jpg" width="500"></img>
        <p>
          Criminal law is the body of law that relates to crime. It includes the rules that define criminal behavior, 
          outline the penalties for committing those crimes, and provide guidance for the prosecution and defense of accused individuals.
        </p>
        <p>
          The primary goal of criminal law is to maintain social order, protect the rights of individuals, and provide justice 
          by punishing those who violate established laws. Crimes can range from violent offenses like murder to non-violent acts 
          such as fraud and theft, and even minor violations like traffic offenses.
        </p>
      </section>

      <section className="section-content">
        <h2>Key Principles of Criminal Law</h2>
        <img src="https://galballyparker.com.au/wp-content/uploads/2023/06/Presumption-of-Innocence-1080x675.jpeg" width="400"></img>
        <ul>
          <li>
            <strong>Mens Rea (Guilty Mind):</strong> The intent or mental state required to commit a crime. This principle ensures that only those 
            who knowingly and willfully break the law are held accountable.
          </li>
          <li>
            <strong>Actus Reus (Guilty Act):</strong> The physical action of committing a crime. Both the mental intent and the physical act must be proven for conviction.
          </li>
          <li>
            <strong>Burden of Proof:</strong> The prosecution carries the responsibility of proving the defendant's guilt 
            "beyond a reasonable doubt," ensuring a high standard of evidence in criminal trials.
          </li>
          <li>
            <strong>Presumption of Innocence:</strong> Every individual is presumed innocent until proven guilty in a court of law, ensuring fair treatment.
          </li>
          <li>
            <strong>Due Process:</strong> Guarantees that individuals receive fair treatment throughout the judicial process, 
            including the right to a fair trial, legal representation, and protection against arbitrary actions.
          </li>
        </ul>
      </section>

      <section className="section-content">
        <h2>Important Criminal Law Cases</h2>
        <ul>
          <li>
            <strong>Mapp v. Ohio (1961):</strong> Established the exclusionary rule, which prevents evidence obtained through illegal searches 
            and seizures from being used in court.
          </li>
          <li>
            <strong>Miranda v. Arizona (1966):</strong> Originated the “Miranda rights,” ensuring that suspects are informed of their 
            rights to remain silent and to have an attorney during interrogations.
          </li>
          <li>
            <strong>Gideon v. Wainwright (1963):</strong> Ensured that criminal defendants have the right to legal counsel, 
            even if they cannot afford a lawyer, strengthening the right to a fair trial.
          </li>
          <li>
            <strong>Terry v. Ohio (1968):</strong> Permitted "stop and frisk" procedures, allowing police officers to search individuals 
            without a warrant under reasonable suspicion of criminal activity.
          </li>
          <li>
            <strong>Roe v. Wade (1973):</strong> Addressed privacy rights and their implications for criminal law, setting boundaries on 
            government interference with individual decisions.
          </li>
          <li>
            <strong>United States v. Nixon (1974):</strong> Affirmed that no one is above the law, limiting the scope of executive privilege 
            and ensuring accountability even at the highest levels of government.
          </li>
        </ul>
        <p>
          These cases have had a profound impact on the evolution of criminal law, shaping how evidence, individual rights, 
          and governmental powers are balanced in modern legal systems.
        </p>
      </section>

      <section className="section-content">
        <h2>Categories of Crimes</h2>
        <img src="https://texascriminaldefensegroup.com/wp-content/uploads/2023/08/Felony-in-Texas-Classification-Penalties.png" width="300"></img>
        <ul>
          <li>
            <strong>Felonies:</strong> These are the most serious crimes, punishable by more than one year in prison. Examples include murder, rape, 
            armed robbery, and large-scale drug trafficking.
          </li>
          <li>
            <strong>Misdemeanors:</strong> Less severe crimes typically resulting in fines or imprisonment of less than one year. Examples include petty theft, 
            vandalism, and minor drug offenses.
          </li>
          <li>
            <strong>Infractions:</strong> Minor violations that usually result in fines and do not involve jail time. Examples include traffic violations, 
            jaywalking, and littering.
          </li>
        </ul>
        <p>
          Understanding these categories helps differentiate the severity of criminal offenses and their associated penalties.
        </p>
      </section>

      <section className="section-content">
        <h2>Modern Challenges in Criminal Law</h2>
        <p>
          Criminal law continues to evolve to address modern challenges such as cybercrime, identity theft, terrorism, and human trafficking. 
          The legal system must adapt to ensure that justice is served in an increasingly digital and globalized world.
        </p>
        <p>
          Issues such as racial bias, wrongful convictions, and over-incarceration also remain central to ongoing reforms, aiming to create a 
          more equitable and effective system of justice.
        </p>
      </section>
    </div>
    
    
  );
}
