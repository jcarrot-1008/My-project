import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Board from './screens/Board/Board'
import Main from './screens/Main'
import Questions from './screens/Questions'
import ReactDoc from './screens/ReactDoc'
import NavBarElement from './components/NavBar/NavBarElement';
import Login from './screens/Login';
import { MainProvider } from './components/context/mainContext';

function App() {

  return (
    <MainProvider>
      <Router>
        <NavBarElement />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/Questions" element={<Questions />} />
          <Route path="/ReactDoc" element={<ReactDoc />} />
        </Routes>
      </Router>
    </MainProvider>
  );
}

export default App
