
import './App.css'
import Login from './Component/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
