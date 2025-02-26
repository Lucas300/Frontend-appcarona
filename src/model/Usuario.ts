import Corrida from "./Corrida";

export default interface Usuario{
    id:number;
    nome:string;
    email:string;
    telefone:string;
    corrida:Corrida | null;
}