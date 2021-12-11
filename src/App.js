import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './components/Profile';
import Talk from './Pages/Talk';
import Team from './Pages/Team';
import Support from './Pages/Support';
import Message from './Pages/Message';
import Footer from './components/Footer';


function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/talk' element={<Talk />} />
        <Route path='/team' element={<Team />} />
        <Route path='/support' element={<Support />} />
        <Route path='/message' element={<Message />} />
      </Routes>
    </Router>
    </div>
    <Footer />
    </div>
  );
}

export default App;
