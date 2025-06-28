import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import React from "react";
import "./FamilyLaw.css";
import NavigationBar from "./navigationbar";

export default function FamilyLaw() {
  return (
    
    <div className="family-law-page">
      <NavigationBar />
      <LiteYouTubeEmbed
        id="L2vS_050c-M"
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
    />
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Family Law</h1>
          <p className="hero-subtitle">
            Understanding the legal framework that governs family relationships, including marriage, divorce, child custody, and adoption.
          </p>
        </div>
      </header>

      <section className="section-content">
        <h2>About Family Law</h2>
        <img src = "https://www.westoverlaw.com/wp-content/uploads/2021/01/introduction-to-family-law-2.png" width ="600"></img>

        <p>
          Family law deals with issues related to family relationships, such as marriage, divorce, child custody, adoption, and domestic partnerships.
          It aims to protect the rights and responsibilities of family members and resolve conflicts in a fair and lawful manner.
        </p>
        <p>
          This area of law affects many aspects of personal life and is often sensitive and complex due to the emotional nature of family disputes.
        </p>
      </section>

      <section className="section-content">
        <h2>Key Areas of Family Law</h2>
        <img src = "https://cdn-hhefj.nitrocdn.com/gZUzUssCVJxXHeQLfUOQENYOldPPLTVd/assets/images/optimized/rev-8a22182/www.mbfc.com/wp-content/uploads/2023/09/appealling-divorce-decree.png" width="300"></img>
        <ul>
          <li>
            <strong>Marriage and Civil Unions:</strong> Legal recognition of partnerships, including rights and obligations of spouses.
          </li>
          <li>
            <strong>Divorce and Separation:</strong> Processes for dissolving marriages, division of property, alimony, and legal separation agreements.
          </li>
          <li>
            <strong>Child Custody and Support:</strong> Determining legal and physical custody of children and financial support obligations.
          </li>
          <li>
            <strong>Adoption and Foster Care:</strong> Legal procedures to establish parent-child relationships outside of birth.
          </li>
          <li>
            <strong>Domestic Violence:</strong> Protective orders and legal remedies for abuse within families or intimate relationships.
          </li>
        </ul>
      </section>

      <section className="section-content">
        <h2>Important Family Law Cases</h2>
        <ul>
          <li>
            <strong>Loving v. Virginia (1967):</strong> Struck down laws banning interracial marriage, affirming marriage as a fundamental right.
          </li>
          <li>
            <strong>Obergefell v. Hodges (2015):</strong> Legalized same-sex marriage nationwide in the United States.
          </li>
          <li>
            <strong>Troxel v. Granville (2000):</strong> Recognized parental rights in child custody disputes against third-party visitation interference.
          </li>
          <li>
            <strong>Planned Parenthood v. Casey (1992):</strong> Reaffirmed the constitutional right to abortion with some state restrictions.
          </li>
        </ul>
      </section>

      <section className="section-content">
        <h2>Modern Challenges in Family Law</h2>
        <img src="https://jwbfamilylaw.com/wp-content/uploads/2025/02/paternal-rights-vs-parental-rights.jpg" width="300" ></img>

        <p>          
          Family law continues to evolve to address emerging issues like surrogacy, assisted reproductive technology, and changing definitions of parenthood.
        </p>
        <p>
          Courts also grapple with balancing children's best interests with parental rights and adapting to diverse family structures.
        </p>
      </section>
    </div>
  );
}
