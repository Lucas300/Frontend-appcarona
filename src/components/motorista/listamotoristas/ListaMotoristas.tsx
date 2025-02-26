import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { buscar } from "../../../services/Service";
import Motorista from "../../../model/Motorista";
import CardMotorista from "../cardmotorista/CardMotorista";

function ListaMotoristas() {


    const [motoristas, setMotoristas] = useState<Motorista[]>([])

    async function buscarMotorista() {
        try {
            await buscar('/motoristas', setMotoristas)
        } catch (error: any) {
            
        }
    }

    useEffect(() => {
        buscarMotorista()    
    }, [motoristas.length])
    
    
    return (
        <>
        {motoristas.length === 0 && (
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
                       {motoristas.map((motoristas) => (
                            <CardMotorista key={motoristas.id} motorista={motoristas} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaMotoristas;