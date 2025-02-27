import Usuario from '../../../model/Usuario'
import { UserCircleIcon } from "@heroicons/react/24/solid";

interface CardUsuariosProps{
    usuario: Usuario
}

function CardUsuario({ usuario }: CardUsuariosProps) {
    return (
        <div className="flex flex-wrap justify-center m-8">
            <div className='shadow-xl flex flex-col justify-between p-2 w-full '>
                <div className='flex items-center justify-between p-3 text-lg rounded-t-lg border-b-2 font-semibold text-[#111f0d] '>
                    <p>Usuário</p>
                    <UserCircleIcon className="w-10 h-10 text-gray-400"/>
                </div>
                <div className='flex flex-col p-4 text-center text-base '>
                    <p className="rounded-xl bg-[#b5db9d] p-2 m-1">Nome: {usuario.nome}</p>
                    <p className="rounded-xl bg-[#b5db9d] p-2 m-1">Email: {usuario.email}</p>
                    <p className="rounded-xl bg-[#b5db9d] p-2 m-1">Telefone: {usuario.telefone}</p>
                </div>
            </div>
        </div>
    )
}

export default CardUsuario