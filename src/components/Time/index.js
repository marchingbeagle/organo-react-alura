import Card from "../Card";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

function Time({ colabInfo, deletarColab, changeTeamColor, time }) {
  return (
    colabInfo.length > 0 && (
      <section
        className="Time"
        style={{ backgroundColor: hexToRgba(time.cor, 0.2) }}
      >
        <input
          type="color"
          className="input-color"
          value={time.cor}
          onChange={(novaCor) => changeTeamColor(novaCor.target.value, time.id)}
        />
        <h3 className="Time-title" style={{ borderColor: time.cor }}>
          {time.nome}
        </h3>
        <section className="time-cards">
          {colabInfo.map((info, index) => {
            return (
              <Card
                key={index}
                nome={info.nome}
                cargo={info.cargo}
                imagem={info.imagem}
                cor={time.cor}
                deletarColab={() => deletarColab(info.id)}
              />
            );
          })}
        </section>
      </section>
    )
  );
}

export default Time;
