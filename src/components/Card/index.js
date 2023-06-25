import "./Card.css";
import { AiFillCloseCircle, AiFillHeart } from "react-icons/ai";

function Card({
  imagem,
  nome,
  cargo,
  cor,
  deletarColab,
  favorito,
  favoritarColab,
}) {
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
        <AiFillHeart
          color={`${favorito ? "red" : "gray"}`}
          size={20}
          onClick={favoritarColab}
        />
      </div>
    </div>
  );
}

export default Card;
