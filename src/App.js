import { Routes, Route, Navigate } from 'react-router-dom';
import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
