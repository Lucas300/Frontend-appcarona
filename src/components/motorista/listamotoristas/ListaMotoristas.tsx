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
            
        }
    }

    useEffect(() => {
        buscarMotorista()    
    }, [motoristas.length])
    
    
    return (
        <>
        {motoristas.length === 0 && (
          <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=" hourglass-wrapper mx-auto"
          colors={['#213d1b', '#427a36']}
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