import { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
import { buscar } from "../../../services/Service";
import Motorista from "../../../model/Motorista";
import CardMotorista from "../cardmotorista/CardMotorista";

function ListaMotoristas() {

    const [motoristas, setMotoristas] = useState<Motorista[]>([])

    async function buscarMotorista() {
        try {
            await buscar('/motoristas', setMotoristas)
        } catch (error: any) {
            console.error("Erro ao buscar motoristas:", error);
        }
    }

    useEffect(() => {
        buscarMotorista()    
    }, [])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            {motoristas.length === 0 ? (
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
                        {motoristas.map((motorista) => (
                            <CardMotorista key={motorista.id} motorista={motorista} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListaMotoristas;