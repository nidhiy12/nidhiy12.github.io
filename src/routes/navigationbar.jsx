import React from "react";
import "./EnvironmentalLaw.css";

export default function NavigationBar() {
  return (
<div className="navigation-bar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/corporatelaw">Corporate Law</a></li>
          <li><a href="/civillaw">Civil Law</a></li>
          <li><a href="/constitutionallaw">Constitutional Law</a></li>
          <li><a href="/criminallaw">Criminal Law</a></li>
          <li><a href="/iplaw">Intellectual Property Law</a></li>
          <li><a href="/environmentallaw">Environmental Law</a></li>
          <li><a href="/familylaw">Family Law</a></li>

          <li><a href="/mocktrialgame">Mock Trial Game</a></li>
          <li><a href="/amendments">Amendments</a></li>


        </ul>
      </div>
  );
}
