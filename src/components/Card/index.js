import "./Card.css";

function Card({ imagem, nome, cargo, corPrimaria }) {
  return (
    <div className="card">
      <div style={{ backgroundColor: corPrimaria }} className="header">
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
