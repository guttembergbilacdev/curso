
import{Link} from 'react-router-dom';

export default function Home(){
    return(
        <div>
            <h1>Bem Vindo a página Home</h1>
            <Link to='/sobre'> Ir para Sobre</Link>
        </div>
    );
}
