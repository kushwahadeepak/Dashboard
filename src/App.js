import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Components/Home';
import LogAuth from './Components/LogAuth';
import Regauth from './Components/Regauth';
import Service from './Components/Service';
import { ToastContainer } from 'react-toastify';
import Employee from './Crud/Employee';
import Empcreate from './Crud/Empcreate';
import EmpDetail from './Crud/EmpDetail';
import EmpEdit from './Crud/EmpEdit';
function App() {
  return (
   <>
   <ToastContainer theme= 'colored'> </ToastContainer>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='service' element={<Service/>}/>
    <Route path ="logauth" element={<LogAuth/>}/>
    <Route path = "reg" element={<Regauth/>}/>
    <Route path='emp' element={<Employee/>}/>
    <Route path='/empcrt' element={<Empcreate/>}/>
    <Route path='/employee/detail/:empid' element={<EmpDetail/>}/>
    <Route path='/employee/empedit/:empid' element={<EmpEdit/>}/>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
