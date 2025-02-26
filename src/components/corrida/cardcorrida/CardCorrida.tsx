import { Link } from 'react-router-dom'
import Corrida from '../../../model/Corrida'

interface CardCorridasProps {
    corrida: Corrida
}

function CardCorrida({ corrida }: CardCorridasProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>

            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">

                    <h3 className='text-lg font-bold text-center uppercase'>
                        Usuario:{corrida.usuario?.nome}
                        Motorista:{corrida.motorista?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>partida:{corrida.partida}</h4>
                    <h4 className='text-lg font-semibold uppercase'>destino:{corrida.destino}</h4>
                    <h4 className='text-lg font-semibold uppercase'>distancia:{corrida.distancia}</h4>
                    <h4 className='text-lg font-semibold uppercase'>velocidade{corrida.velocidade}</h4>
                    <p>Tempo corrida:{corrida.tempoFormatado}</p>

                </div>
            </div>
            <div className="flex">
                <Link to={`/editarcorrida/${corrida.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarcorrida/${corrida.id}`}
                    className='w-full text-slate-100 bg-red-400 hover:bg-indigo-800 
    flex items-center justify-center py-2'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCorrida