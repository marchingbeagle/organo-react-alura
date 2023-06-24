import "./Botao.css";

function Botao(props) {
  return <button className="button">{props.children}</button>;
}

export default Botao;
