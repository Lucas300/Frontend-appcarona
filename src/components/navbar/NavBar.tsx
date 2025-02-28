import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/images/img_nav.png";
import './NavBar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='w-full flex justify-center py-3 bg-[#111f0d] text-white'>
                <div className="container flex justify-between items-center text-lg">
                    <Link to='/home' className="text-3xl font-bold">Carona Legal</Link>
                    <img src={logo} alt="Logotipo" className="h-12 mr-auto" />
                    <button className="block lg:hidden" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <div className={`flex-col lg:flex-row lg:flex ${isOpen ? 'flex' : 'hidden'} lg:gap-4 pt-2`}>
                        <Link to='/motoristas' className='hover:underline'>Motorista</Link>
                        <Link to='/cadastrarmotorista' className='hover:underline'>Cadastrar Motorista</Link>
                        <Link to='/usuarios' className='hover:underline'>Usuários</Link>
                        <Link to='/sobre' className='hover:underline'>Sobre</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;