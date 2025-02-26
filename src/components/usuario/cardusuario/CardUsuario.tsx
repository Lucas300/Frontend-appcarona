import { Link } from 'react-router-dom'
import Usuario from '../../../model/Usuario'

interface CardUsuariosProps{
    usuario: Usuario
}

function CardUsuario({ usuario }: CardUsuariosProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
                Usuario
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{usuario.nome}</p>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{usuario.email}</p>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{usuario.telefone}</p>
            <div className="flex">
                
            </div>

        </div>
    )
}

export default CardUsuario