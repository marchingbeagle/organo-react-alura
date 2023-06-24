import "./Card.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Card({ imagem, nome, cargo, cor, deletarColab }) {
  return (
    <div className="card">
      <AiFillCloseCircle
        color="white"
        size={25}
        onClick={deletarColab}
        className="botao-deletar"
      />
      <div style={{ backgroundColor: cor }} className="header">
        <img className="card-img" src={imagem} alt="" />
      </div>
      <div className="footer">
        <h4 className="card-name">{nome}</h4>
        <h5 className="card-role">{cargo}</h5>
      </div>
    </div>
  );
}

export default Card;
