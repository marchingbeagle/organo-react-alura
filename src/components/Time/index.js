import Card from "../Card";
import "./Time.css";

function Time({ colabInfo, nome, corPrimaria, corSecundaria }) {
  return (
    colabInfo.length > 0 && (
      <section className="Time" style={{ backgroundColor: corSecundaria }}>
        <h3 className="Time-title" style={{ borderColor: corPrimaria }}>
          {nome}
        </h3>
        <section className="time-cards">
          {colabInfo.map((info) => (
            <Card
              key={info.nome}
              nome={info.nome}
              cargo={info.cargo}
              imagem={info.imagem}
              corPrimaria={corPrimaria}
            />
          ))}
        </section>
      </section>
    )
  );
}

export default Time;
