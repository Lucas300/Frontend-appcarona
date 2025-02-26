import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import Corrida from "../../../model/Corrida";
import CardCorrida from "../cardcorrida/CardCorrida";

function ListaCorridas() {

    const navigate = useNavigate();

    const [corridas, setCorridas] = useState<Corrida[]>([]);

    async function buscarCorridas() {
        try {
            await buscar('/corridas', setCorridas)

        } catch (error: any) {
        }
    }

    useEffect(() => {
        buscarCorridas()
    }, [corridas.length])

    return (
        <>
            {corridas.length === 0 && (
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
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                    >
                        {corridas.map((corrida) => (
                            <CardCorrida key={corrida.id} corrida={corrida} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCorridas;