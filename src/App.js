import './App.scss';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="all">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
