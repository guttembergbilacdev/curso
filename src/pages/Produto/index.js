
import { useParams  } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Produto(){
    const {id} = useParams();
    return(
        <div>
            <h1>Grade de Produto</h1><br/>

            <span>Produto Selecionado: {id} </span>
        </div>
    );
}
