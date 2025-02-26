import Motorista from "./Motorita";
import Usuario from "./Usuario";

export default interface Corrida{
    id:number;
    distancia:number;
    velocidade:number;
    tempoCorrida:number;
    tempoFormatado:string;
    partida:string;
    destino:string;
    usuario:Usuario | null;
    motorista:Motorista | null;
}