import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Alert from './components/Alert';
import Registro from './components/Registro';
import Formulario from './components/Formulario';


function App() {
  const [mensaje, setMensaje] =useState('');

  return (
    <>
    <Registro />
    <Formulario setMensaje={setMensaje} />
    {mensaje && <Alert mensaje={mensaje} />}  
    
    </>
  )
}

export default App
