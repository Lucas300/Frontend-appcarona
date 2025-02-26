import Corrida from "./Corrida";

export default interface Usuario{
    id:number;
    nome:string;
    descricao:string;
    email:string;
    telefone:string;
    corrida:Corrida | null;
}