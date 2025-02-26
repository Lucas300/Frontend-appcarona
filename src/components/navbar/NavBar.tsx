import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-6
            			  bg-[#849cc1] text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">App Carona Legal</Link>

                    <div className='flex gap-4'>
                    <Link to='/motoristas' className="">Motorista</Link>
                    <Link to='/cadastrarmotorista' className='hover:underline'>Cadastrar motorista</Link>
                    Usuário
                    Sobre                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar