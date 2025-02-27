import { Link } from "react-router-dom"
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Motorista from "../../../model/Motorista"



interface CardMotoristaProps {
    motorista: Motorista
}

function CardMotorista({ motorista }: CardMotoristaProps) {
    return (
        <div className="flex flex-wrap justify-center m-8">
            <div className='shadow-xl flex flex-col justify-between p-2 w-full '>
                <div className=' flex items-center justify-between p-3 text-lg rounded-t-lg border-b-2 font-semibold text-[#111f0d] '>
                    <p>Motorista</p>
                    <UserCircleIcon className="w-10 h-10 text-gray-400"/>
                </div>
                
                <div className='flex flex-col p-4 text-center text-base '>
                    <p className="rounded-xl bg-[#b5db9d] p-2 m-1">{motorista.nome}</p>
                    <p className="rounded-xl bg-[#b5db9d] p-2 m-1">{motorista.tipoVeiculo}</p>
                </div>
                <div className="flex p-2">
                    <Link to={`/editarmotorista/${motorista.id}`}
                        className='w-full text-slate-100 bg-[#427a36] hover:bg-[#325c28] 
                            flex items-center justify-center rounded-l-lg py-2'>
                        <button>Editar</button>
                    </Link>

                    <Link to={`/deletarmotorista/${motorista.id}`}
                        className='w-full text-slate-100 bg-[#325c28] hover:bg-[#213d1b]
                            flex items-center justify-center rounded-r-lg py-2'>
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardMotorista