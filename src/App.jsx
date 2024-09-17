import './App.css'
import { Button } from './componentes/Button'
import { RandomComponent } from './componentes/RandomComponent';

function App() {

  const buttonText = "Count : ";

  return (
    <>
      <h1>LABORATORIO 7</h1>
      <Button text={buttonText}/>   
      <RandomComponent
      name= "Juan Perez"
      age={28}
      ocupation="Ingeniero" 
      />
      <RandomComponent
      name= "Micaela Santana"
      age={32}
      ocupation="Psicologa"
      />
    </>
  )
}

export default App
