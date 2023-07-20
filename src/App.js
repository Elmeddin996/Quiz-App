import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import {QuizProvider } from './context/QuizContext';



function App() {
 
  return (
    <div className="App">
      <QuizProvider>
       <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
       </Router>
      </QuizProvider>
    </div>
  );
}

export default App;
