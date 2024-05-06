import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <h1>"Tu ruta hacia la felicidad comienza aquí: EUREKAE, la plataforma que transforma ideas en alegría"</h1>
      <div className='contenedor-principal'>
        
        <Testimonio 
          nombre='Frank Ernesto Acosta Rodriguez'
          pais='Brazil'
          imagen='frank'
          cargo='CEO e Ingeniero Programador'
          empresa='EUREKAE'
          testimonio='Hace alrededor de 2 años surgio en mi la idea de crear una empresa como Eurekae, que ha ido mudando de proposito con los cambios, sin embargo hoy la perspectiva es diferente: Por que no hacer una multiplataforma con todas nuestras soluciones?. Hoy esa es la meta que nos define como empresa.'
        />
        <Testimonio
          nombre='Deisy Daniela Acosta Rodriguez'
          pais='Cuba'
          imagen='daniela'
          cargo='Promotora y Gerente de Marketing'
          empresa='EUREKAE'
          testimonio='Cuando  decidi unirme a esta empresa no imagine lo que podia alcanzar en mi vida. Ahora con el uso de mis habilidades he logrado cumplir una de mis principales metas de crecer profesionalmente'
        />
      </div>  
    </div>
  );
}

export default App;
