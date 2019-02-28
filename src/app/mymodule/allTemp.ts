export class Data {
  sum:number;
  val:string;
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: any;
}
export class DataArr {
  summa:number;
  value:string;
  checked:boolean;
}
export interface AllVal {
  value: string;
}
//создаем интерфейс кошелька
export interface IWallet{
  sum:number;
  val:string;
}
export interface IExchange {
  baseCurIdx:number; // базовый курc по индексу
  rateData:Map<Number,Number>; //курсы валют
  setRate(val:string, rate:number):void; // функция установки курсов валют
  exchangeVal(val:string, sum:number,cashVal:string):boolean // функция транзакции валюты
}
