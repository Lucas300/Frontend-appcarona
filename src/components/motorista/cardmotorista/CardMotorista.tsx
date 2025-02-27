import { Link } from "react-router-dom"
import Motorista from "../../../model/Motorista"



interface CardMotoristaProps {
    motorista: Motorista
}

function CardMotorista({ motorista }: CardMotoristaProps) {
    return (
        <div className="flex flex-wrap justify-center m-8">
            <div className='shadow-xl flex flex-col justify-between  w-full '>
                <div className='bg-[#213d1b] p-2 text-lg rounded-t-lg font-semibold text-white text-center'>
                    <p>Motorista</p>
                </div>
                <div className='flex flex-col p-4 text-center text-base '>
                    <p>{motorista.nome}</p>
                    <p>{motorista.tipoVeiculo}</p>
                </div>
                <div className="flex">
                    <Link to={`/editarmotorista/${motorista.id}`}
                        className='w-full text-slate-100 bg-[#325c28] hover:bg-[#213d1b] 
                            flex items-center justify-center rounded-bl-lg py-2'>
                        <button>Editar</button>
                    </Link>

                    <Link to={`/deletarmotorista/${motorista.id}`}
                        className='w-full text-slate-100 bg-[#213d1b] hover:bg-[#111f0d]
                            flex items-center justify-center rounded-br-lg py-2'>
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardMotorista