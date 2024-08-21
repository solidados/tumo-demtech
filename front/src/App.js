import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Section1 from './components/sectionPart/Section1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lawyer from './pages/Lawyers/Lawyer';
import LawyerProfile from './pages/Lawyer/LayerProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Section1 />} />
          <Route path="/lawyer" element={<Lawyer />} />
          <Route path="/lawyerprofile/:userId" element={<LawyerProfile />} /> {/* Dynamic route */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
