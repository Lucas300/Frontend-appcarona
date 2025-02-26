import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
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

        }
    }

    useEffect(() => {
        buscarUsuarios()    
    }, [usuarios.length])
    
    return (
        <>
        {usuarios.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {usuarios.map((usuario) => (
                            <CardUsuario key={usuario.id} usuario={usuario} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaUsuarios;