import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import CriminalLaw from './routes/CriminalLaw';
import CivilLaw from './routes/CivilLaw';
import MockTrialGame from './routes/MockTrialGame';
import ConstitutionalLaw from './routes/ConstitutionalLaw';
import CorporateLaw from './routes/CorporateLaw';
import IpLaw from './routes/IpLaw';
import EnvironmentalLaw from './routes/EnvironmentalLaw';
import FamilyLaw from './routes/FamilyLaw';

import Amendments from './routes/Amendments';







function App() {
  return (
    <Router>
      <div>
  
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/criminal-law">Criminal Law</a></li>
            <li><a href="/civil-law">Civil Law</a></li>
            <li><a href="/mock-trial-game">Mock Trial Game</a></li>
            <li><a href="/constitutional-law">Constitutional Law</a></li>
            <li><a href="/corporate-law">Corporate Law</a></li>
            <li><a href="/ip-law">IP Law</a></li>
            <li><a href="/environmental-law">Environmental Law</a></li>
            <li><a href="/family-law">Family Law</a></li>

            <li><a href="/Amendments">Amendments</a></li>




          </ul>
        </nav>

    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criminal-law" element={<CriminalLaw />} />
          <Route path="/civil-law" element={<CivilLaw />} />
          <Route path="/mock-trial-game" element={<MockTrialGame />} />
          <Route path="/constitutional-law" element={<ConstitutionalLaw />} />
          <Route path="/coporate-law" element={<CorporateLaw />} />
          <Route path="/ip-law" element={<IpLaw/>} />
          <Route path="/environmental-law" element={<EnvironmentalLaw/>} />
          <Route path="/family-law" element={<FamilyLaw/>} />

          <Route path="/amendments" element={<Amendments/>} />




        
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
