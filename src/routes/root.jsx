import './root.css';

export default function Root() {
  return (
    <>
      {/* Navbar */}
      <header id="navbar">
        <div className="logo">⚖️ Law Simplified</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/corporatelaw">Corporate Law</a></li>
            <li><a href="/iplaw">Ip Law</a></li>
            <li><a href="/environmentallaw">Environmental Law</a></li>
            <li><a href="/criminallaw">Criminal Law</a></li>
            <li><a href="/civillaw">Civil Law</a></li>
            <li><a href="/ConstitutionalLaw">Constitutional Law</a></li>
            <li><a href="/familylaw">Family Law</a></li>

            <li><a href="/mocktrialgame">Mock Trial Game</a></li>
            <li><a href="/Amendments">Amendments</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero">
          <h1>Welcome to Law Simplified</h1>
          <p>Understand your rights. Explore different kinds of law. Play and learn through interactive tools.</p>

         
        
        </section>

        {/* Law Types Section */}
        <section className="law-types">
          <h2>Types of Law That Might Interest You</h2>
          <div className="law-grid">
            <div className="law-card">
              <h3>Criminal Law</h3>
              <p>Deals with crimes and punishment. If someone breaks the law; like theft or assault - this is the type of law that applies.</p>
              <a href="/criminallaw">Learn More →</a>
            </div>

            <div className="law-card">
              <h3> Civil Law</h3>
              <p>Focuses on private disputes between people or organizations - like contracts, property, or divorce.</p>
              <a href="/civillaw">Learn More →</a>
            </div>

            <div className="law-card">
              <h3> Constitutional Law</h3>
              <p>Protects your rights under the Constitution - like freedom of speech or equal protection under the law.</p>
              <a href="/ConstitutionalLaw">Learn More →</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p> Law Simplified. Know your rights. Stay empowered.</p>
      </footer>
    </>
  );
}
