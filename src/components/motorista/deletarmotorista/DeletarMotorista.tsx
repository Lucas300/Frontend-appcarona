import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Motorista from "../../../model/Motorista";
import { UserCircleIcon } from "@heroicons/react/24/solid"; // Icone da pessoinha

function DeletarMotorista() {
  const navigate = useNavigate();
  const [motorista, setMotorista] = useState<Motorista>({} as Motorista);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/motoristas/${id}`, setMotorista);
    } catch (error: any) {
      console.error("Erro ao buscar motorista:", error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function DeletarMotorista() {
    setIsLoading(true);
    try {
      await deletar(`/motoristas/${id}`);
      alert("Motorista apagado com sucesso");
    } catch (error: any) {
      alert("Erro ao deletar o Motorista.");
    }
    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/motoristas");
  }

  return (
    <div className="container min-h-screen w-1/3 mx-auto flex flex-col items-center">
      {/* Título */}
      <h1 className="text-4xl text-center my-4">Deletar Motorista</h1>

      {/* Mensagem de Confirmação */}
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o motorista a seguir?
      </p>

      {/* Novo Card */}
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 border border-gray-200">
        {/* Cabeçalho com Ícone */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Motorista</h2>
          <UserCircleIcon className="w-12 h-12 text-gray-400" />
        </div>

        {/* Nome do Motorista */}
        <p className="p-4 text-lg bg-[#93af82] text-gray-900 font-semibold rounded-md mt-2">
          {motorista.nome || "Nome não disponível"}
        </p>

        {/* Tipo do Veículo */}
        <p className="p-4 text-lg bg-[#abc79a] text-gray-900 font-semibold rounded-md mt-2">
          {motorista.tipoVeiculo || "Tipo de veículo não disponível"}
        </p>

        {/* Rodapé */}
        <div className="flex justify-between items-center text-gray-500 text-xs mt-4 border-t pt-2">
          <span>ID: {id || "Não encontrado"}</span>
          <span>Registro ativo</span>
        </div>

        {/* Gradiente inferior */}
        <div className="h-1 w-full bg-gradient-to-r from-[#427A36] via-[#325C28] to-[#213D1B] mt-4 rounded-full"></div>
      </div>

      {/* Botões de ação */}
      <div className="flex w-full max-w-md mt-4">
        <button
          className="text-white bg-[#111F0D] hover:bg-black w-1/2 py-2 rounded-l-lg"
          onClick={retornar}
        >
          Não
        </button>
        <button
          className="w-1/2 text-white bg-[#427A36] hover:bg-[#325C28] flex items-center justify-center rounded-r-lg"
          onClick={DeletarMotorista}
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>Sim</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default DeletarMotorista;
