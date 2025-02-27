import { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import Usuario from "../../../model/Usuario";
import CardUsuario from "../cardusuario/CardUsuario";

function ListaUsuarios() {

    const navigate = useNavigate();

    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    async function buscarUsuarios() {
        try {
            await buscar('/usuarios', setUsuarios)
        } catch (error: any) {
            console.error("Erro ao buscar usuários:", error);
        }
    }

    useEffect(() => {
        buscarUsuarios()
    }, [usuarios.length])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            {usuarios.length === 0 ? (
                <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass="hourglass-wrapper"
                    colors={['#213d1b', '#427a36']}
                />
            ) : (
                <div className="container flex flex-col items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {usuarios.map((usuario) => (
                            <CardUsuario key={usuario.id} usuario={usuario} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListaUsuarios;