import Form1 from './form';
import Register from './register';
import Login1 from './login1';
import {BrowserRouter as Router , Routes  , Route} from 'react-router-dom';

function App() {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<Form1/>}/ >
        <Route path="/register" element={<Register/>}/>
        <Route path="/login1 " element={<Login1/>}/>
        


      </Routes>
    </Router>
      
  );
}

export default App;
