import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Motorista from "../../../model/Motorita";

function FormMotorista() {

    const navigate = useNavigate();

    const [motorista, setMotorista] = useState<Motorista>({} as Motorista)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setMotorista({
            ...motorista,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/motoristas")
    }

    async function gerarNovoMotorista(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/motoristas`, motorista, setMotorista)
                alert('O Motorista foi atualizado com sucesso!')
            } catch (error: any) {
                    alert('Erro ao atualizar o motorista.')
            }
        } else {
            try {
                await cadastrar(`/motoristas`, motorista, setMotorista)
                alert('O Motorista foi cadastrado com sucesso!')
            } catch (error: any) {
                    alert('Erro ao cadastrar o motorista.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Motorista' : 'Editar Motorista'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoMotorista}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Motorista</label>
                    <input
                        type="text"
                        placeholder="Nome do motorista"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={motorista.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Tipo de veiculo</label>
                    <input
                        type="text"
                        placeholder="Descreva o tipo de veiculo"
                        name='tipoVeiculo'
                        className="border-2 border-slate-700 rounded p-2"
                        value={motorista.tipoVeiculo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }
                </button>
            </form>
        </div>
    );
}

export default FormMotorista;