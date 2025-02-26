import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import Corrida from "../../../model/Corrida"

function DeletarCorrida() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [corrida, setCorrida] = useState<Corrida>({} as Corrida)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/corridas/${id}`, setCorrida)
        } catch (error: any) {

        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCorrida()  {
        setIsLoading(true)

        try {
            await deletar(`/corridas/${id}`)
            alert('Corrida apagada com sucesso')

        } catch (error: any) {
                alert('Erro ao deletar a corrida.')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/corridas")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Corrida</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a corrida a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Corrida
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{corrida.usuario?.nome}</p>
                    <p className='text-xl h-full'>{corrida.motorista?.nome}</p>
                    <p className='text-xl h-full'>{corrida.partida}</p>
                    <p className='text-xl h-full'>{corrida.destino}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center'
                        onClick={deletarCorrida}>
                        
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCorrida;