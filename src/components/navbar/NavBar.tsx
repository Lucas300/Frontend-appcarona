import { Link } from "react-router-dom"
import logo from "../../../public/images/img_nav.png"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-3 bg-[#111f0d] text-white'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-3xl font-bold">Carona Legal</Link>
                    <img src={logo} alt="Logotipo" className="h-12 mr-auto" />  
                    <div className='flex gap-4 pt-2'>
                        <Link to='/motoristas' className='hover:underline'>Motorista</Link>
                        <Link to='/cadastrarmotorista' className='hover:underline'>Cadastrar Motorista</Link>
                        <Link to='/usuarios' className='hover:underline'>Usuários</Link>
                        <Link to='/sobre' className='hover:underline'>Sobre</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar