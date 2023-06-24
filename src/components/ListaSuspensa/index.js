import "./ListaSuspensa.css";

function ListaSuspensa({ label, itens, required, setValue, value }) {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        required={required}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <option>Escolha seu time</option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default ListaSuspensa;
