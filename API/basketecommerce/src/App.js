import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Product from './Components/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes>
    </Router>
  );
}

export default App;
