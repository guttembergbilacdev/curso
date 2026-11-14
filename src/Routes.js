
import Header from './Component/Header';
//Importa as ferramentas do React Router
//Outlet = espaço onde a página da rota filha aparece
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';

//Importa cada página (cada pasta tem um index.js)
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Produto from './pages/Produto';
import Erro from './pages/Erro'

//Layout: mostra o Header em cima e a página da rota embaiixo
function LayoutComHeader() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

//Componente que define todas as rotas do app
const AppRoutes = () => {
    return(
        //BrowserRouter ativa as rotas usando url do navegador
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/sobre' element={<Sobre />}/>
        <Route path= '/contato' element={<Contato />}/>
        <Route path= 'produto/:id' element={<Produto />} />


        <Route path='*' element={<Erro/>} />
       </Routes>
             
        </BrowserRouter>
    );
};
//Exporta para o App1.js poder importar
export default AppRoutes;