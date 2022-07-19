import logo from './logo.svg';
import './App.css';
import User from "./yo.jpg";
import Greet from './Components/Greet';

function App() {

  const nombre = "Sandra"
  let apellido = "Lopez"
  var edad = 26
  const direccion = {
    calle: "Ruta del vino",
    pais: "México"
  }

    function holaMundo(){
      alert("Hola mundo")
    }

    const adiosMundo = () => {
      alert("Adios mundo")
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={User} className="App-logo" alt="yo" onClick={holaMundo()}/>
        <p onMouseEnter={adiosMundo}>
          Aprendiendo React.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Me llamo <i>{nombre.toUpperCase()}</i> <strong>{apellido}</strong>
          <br/>
          Vivo en {direccion.calle}, {direccion.pais}
        </a>
        <Greet name="Yanni" home="San Antonio Texas" styles="red">
          <p>I'm the children of the Greet component</p>
        </Greet>
        <Greet name="Moy" home="CDMX" styles="orange"/>
      </header>
    </div>
  );
}

export default App;
