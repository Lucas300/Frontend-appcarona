import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import ListaMotoristas from './components/motorista/listamotoristas/ListaMotoristas'
import FormMotorista from './components/motorista/formmotorista/FormMotorista'
import DeletarMotorista from './components/motorista/deletarmotorista/DeletarMotorista'
import ListaUsuarios from './components/usuario/listausuarios/ListaUsuarios'
import ListaCorridas from './components/corrida/listacorrida/ListaCorridas'
import FormCorrida from './components/corrida/formcorrida/FormCorrida'
import DeletarCorrida from './components/corrida/deletarcorrida/DeletarCorrida'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/motoristas" element={<ListaMotoristas />} />
          <Route path="/cadastrarmotorista" element={<FormMotorista />} />
          <Route path="/editarmotorista/:id" element={<FormMotorista />} />
          <Route path="/deletarmotorista/:id" element={<DeletarMotorista />} />
          <Route path="/usuarios" element={<ListaUsuarios />} />
          <Route path="/corridas" element={<ListaCorridas />} />
          <Route path="/cadastrarcorrida" element={<FormCorrida />} />
          <Route path="/editarcorrida/:id" element={<FormCorrida />} /> 
          <Route path="/deletarcorrida/:id" element={<DeletarCorrida />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App