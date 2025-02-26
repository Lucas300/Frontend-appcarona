import Motorista from "./Motorista";
import Usuario from "./Usuario";

export default interface Corrida{
    id:number;
    partida:string;
    destino:string;
    distancia:number;
    velocidade:number;
    tempoCorrida:number;
    tempoFormatado:string;
    usuario:Usuario | null;
    motorista:Motorista | null;
}