import "./CampoTexto.css";

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
