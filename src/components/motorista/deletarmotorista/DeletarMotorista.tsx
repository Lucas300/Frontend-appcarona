import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import Motorista from "../../../model/Motorista"

function DeletarMotorista() {

    const navigate = useNavigate()

    const [motorista, setMotorista] = useState<Motorista>({} as Motorista)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/motoristas/${id}`, setMotorista)
        } catch (error: any) {
           
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function DeletarMotorista() {
        setIsLoading(true)

        try {
            await deletar(`/motoristas/${id}`)
            alert('Motorista apagado com sucesso')

        } catch (error: any) {
                alert('Erro ao deletar o Motorista.')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/motoristas")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Motorista</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o motorista a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Motorista
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{motorista.nome}</p>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{motorista.tipoVeiculo}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                                   hover:bg-indigo-600 flex items-center justify-center'
                                   onClick={DeletarMotorista}>
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
export default DeletarMotorista