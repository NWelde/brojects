
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation'; // Ensure this component uses className="nav"
import Home from './Home';
import About from './About';
import Footer from './Footer'; // Ensure this component uses className="footer"
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Router>
        <Navigation />
        <div className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;