import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Motorista from "../../../model/Motorista";
import Corrida from "../../../model/Corrida";
import Usuario from "../../../model/Usuario";

function FormCorrida() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [motoristas, setMotoristas] = useState<Motorista[]>([])
    const [motorista, setMotorista] = useState<Motorista>({ id: 0, nome:'' ,tipoVeiculo: '', })

    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [usuario, setUsuario] = useState<Usuario>({ id: 0, nome:'', email:'', telefone:''})

    const [corrida, setCorrida] = useState<Corrida>({} as Corrida)

    const { id } = useParams<{ id: string }>()

    async function buscarCorridaPorId(id: string) {
        try {
            await buscar(`/corridas/${id}`, setCorrida)
        } catch (error: any) {
            
        }
    }

    async function buscarMotoristaPorId(id: string) {
        try {
            await buscar(`/motoristas/${id}`, setMotorista)
        } catch (error: any) {
        }
    }

    async function buscarUsuarioPorId(id: string) {
        try {
            await buscar(`/usuarios/${id}`, setUsuario)
        } catch (error: any) {
        }
    }

    async function buscarMotorista() {
        try {
            await buscar('/motoristas', setMotoristas)
        } catch (error: any) {
        }
    }

    async function buscarUsuario() {
        try {
            await buscar('/usuarios', setUsuarios)
        } catch (error: any) {
        }
    }


    useEffect(() => {
        buscarMotorista()
        if (id !== undefined) {
            buscarCorridaPorId(id)
        }
    }, [id])

    useEffect(() => {
        buscarUsuario()
        if (id !== undefined) {
            buscarUsuarioPorId(id)
        }
    }, [id])

    useEffect(() => {
        setCorrida({
            ...corrida,
            motorista: motorista,
            usuario: usuario,
        })
    }, [motorista, usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCorrida({
            ...corrida,
            [e.target.name]: e.target.value,
            motorista: motorista,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/corridas');
    }

    async function gerarNovaCorrida(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/corridas/${id}`, corrida, setCorrida);
                alert('Corrida atualizada com sucesso')
            } catch (error: any) {
                    alert('Erro ao atualizar a Corrida')
            }

        } else {
            try {
                await cadastrar(`/corridas`, corrida, setCorrida)
                alert('Corrida cadastrada com sucesso');
            } catch (error: any) {
                    alert('Erro ao cadastrar a Corrida ');
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoMotorista = motorista.nome === '';
    const carregandoUsuario = usuario.nome === '';

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaCorrida}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Partida</label>
                    <input
                        type="text"
                        placeholder="Partida"
                        name="partida"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={corrida.partida}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Destino</label>
                    <input
                        type="text"
                        placeholder="Destino"
                        name="destino"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={corrida.destino}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Distancia</label>
                    <input
                        type="number"
                        placeholder="Distancia"
                        name="distancia"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={corrida.distancia}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Velocidade</label>
                    <input
                        type="number"
                        placeholder="Velocidade"
                        name="velocidade"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={corrida.velocidade}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">TempoCorrida</label>
                    <input
                        type="number"
                        placeholder="TempoCorrida"
                        name="tempoCorrida"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={corrida.tempoCorrida}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Usuario da Postagem</p>
                    <select name="motorista" id="motorista" className='border p-2 border-slate-800 rounded'
                        onChange={(e) => buscarMotoristaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione um motorista</option>

                        {motoristas.map((motorista) => (
                            <>
                                <option value={motorista.id} >{motorista.nome}</option>
                            </>
                        ))}

                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Usuario</p>
                    <select name="usuario" id="usuario" className='border p-2 border-slate-800 rounded'
                        onChange={(e) => buscarUsuarioPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione um Usuario</option>
                        {usuarios.map((usuario) => (
                            <>
                                <option value={usuario.id} >{usuario.nome}</option>
                            </>
                        ))}

                    </select>
                </div>
                <button
                    type='submit'
                    className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                    disabled={carregandoMotorista || carregandoUsuario}
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormCorrida;