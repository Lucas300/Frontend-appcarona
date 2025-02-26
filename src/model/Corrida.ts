import Motorista from "./Motorista";
import Usuario from "./Usuario";

export default interface Corrida{
    id:number;
    distancia:number;
    velocidade:number;
    tempoCorrida:number;
    partida:string;
    destino:string;
    tempoFormatado:string;
    usuario:Usuario | null;
    motorista:Motorista | null;
}