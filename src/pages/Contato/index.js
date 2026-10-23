
import { Link } from "react-router-dom";
export default function Contato(){
    return(
        <div>
            <h1>Contatos</h1><br/>
            <span>email: teste@teste.com</span><br/><br/>
            <Link to= '/'>Voltar para Home</Link>
        </div>
    );
}