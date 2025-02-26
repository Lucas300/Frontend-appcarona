import { Link } from "react-router-dom"
import Motorista from "../../../model/Motorista"



interface CardMotoristaProps {
    motorista: Motorista
}

function CardMotorista({ motorista }: CardMotoristaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-red-800 text-white font-bold text-2xl'>
                Motorista
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{motorista.nome}</p>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{motorista.tipoVeiculo}</p>
            <div className="flex">
                <Link to={`/editarmotorista/${motorista.id}`}
                    className='w-full text-slate-100 bg-	indigo-400 hover:bg-indigo-800 
    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarmotorista/${motorista.id}`}
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
		flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardMotorista