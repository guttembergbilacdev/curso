
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from './pages/Sobre'
import Home from './pages/Home';


function App1(){
    return(
         <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home />} />
         <Route path='/Sobre' element={<Sobre />} />
            </Routes>
         </BrowserRouter>
      );
}
export default App1;

