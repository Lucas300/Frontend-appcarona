import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardUsuario from './components/usuario/cardusuario/CardUsuario'
import Home from './pages/home/Home'
import Navbar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import ListaMotoristas from './components/motorista/listamotoristas/ListMotoristas'
import FormMotorista from './components/motorista/formmotorista/FormMotorista'
import DeletarMotorista from './components/motorista/deletarmotorista/DeletarMotorista'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/motoristas" element={<ListaMotoristas />} />
          <Route path="/usuarios" element={<CardUsuario />} />
          <Route path="/cadastrarmotorista" element={<FormMotorista />} />
          <Route path="/editarmotorista/:id" element={<FormMotorista />} />
          <Route path="/deletarmotorista/:id" element={<DeletarMotorista />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App