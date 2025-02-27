import { Link } from 'react-router-dom'
import Corrida from '../../../model/Corrida'

interface CardCorridasProps {
    corrida: Corrida
}

function CardCorrida({ corrida }: CardCorridasProps) {
    return (
        <div className='shadow-xl flex flex-col justify-between m-8'>
            <div>
                <div className="flex flex-col w-full bg-[#427a36] p-3 text-lg text-white font-medium text-center">
                    <p>Usuario: {corrida.usuario?.nome}</p>
                    <p>Motorista: {corrida.motorista?.nome}</p>
                </div>
                <div className='flex flex-col p-4 text-center font-medium text-base '>
                    <p >Partida: {corrida.partida}</p>
                    <p >Destino: {corrida.destino}</p>
                    <p >Distancia: {corrida.distancia}</p>
                    <p >Velocidade: {corrida.velocidade}</p>
                    <p className='text-base font-light'>Tempo Corrida: {corrida.tempoFormatado}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarcorrida/${corrida.id}`}
                    className='w-full text-slate-100 bg-[#325c28] hover:bg-[#213d1b] 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarcorrida/${corrida.id}`}
                    className='w-full text-slate-100 bg-[#213d1b] hover:bg-[#111f0d]
                        flex items-center justify-center py-2'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCorrida