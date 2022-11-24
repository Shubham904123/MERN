import './App.css';
import Home from './home';
import About from './about';
import Form from './form';
import Form1 from './form1';
import Form2 from './form2';
import Form3 from './form3';
import Mui from './mui';
import steppers from './stepper';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

function App() {

      return (
            <Router>
                  <Routes>
                        <Route path='/' element={<Home/>}   />
                        <Route path='/about' element={<About/>}   />
                        <Route path='/form' element={<Form/>}   />
                        <Route path='/mui' element={<Mui/>}   />
                        <Route path='/form1' element={<Form1/>}   />
                        <Route path='/form2' element={<Form2/>}   />
                        <Route path='/stepper' element={<Form/>}   />
                  </Routes>
            </Router>
            );
}

export default App;