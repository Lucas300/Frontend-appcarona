import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardMotorista from './components/cardmotorista/CardMotorista'
import CardUsuario from './components/cardusuario/CardUsuario'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-80vh]">
        <Routes>
          <Route path="/motorista" element={<CardMotorista/>} />
          <Route path="/usuario" element={<CardUsuario/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App