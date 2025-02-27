import Usuario from '../../../model/Usuario'

interface CardUsuariosProps{
    usuario: Usuario
}

function CardUsuario({ usuario }: CardUsuariosProps) {
    return (
        <div className="flex flex-wrap justify-center m-8">
            <div className='shadow-xl shadow-[#325c28]  flex flex-col justify-between w-full'>
                <div className='p-2 text-lg font-semibold text-[#325c28] text-center'>
                    <p>Usuário</p>
                </div>
                <div className='flex flex-col p-4 text-center text-base '>
                    <p>Nome: {usuario.nome}</p>
                    <p>Email: {usuario.email}</p>
                    <p>Telefone: {usuario.telefone}</p>
                </div>
            </div>
        </div>
    )
}

export default CardUsuario