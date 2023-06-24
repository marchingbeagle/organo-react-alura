import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulário";
import Time from "./components/Time";
import Footer from "./components/Footer/Index";

function App() {
  const timesArray = [
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Sciense",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [colab, setColab] = useState([]);

  const addNewUser = (newUser) => {
    setColab([...colab, newUser]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        timesArray={timesArray.map((time) => time.nome)}
        onSubmitInfo={(newUser) => addNewUser(newUser)}
      />

      {timesArray.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colabInfo={colab.filter((colab) => colab.time === time.nome)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
