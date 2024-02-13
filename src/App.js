import './App.css';
import LoginDash from './components/Login_view/LoginDash';
import Logged from   './components/Logged_View/Logged';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginDash />} />
          <Route path="/logged" element={<Logged />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
