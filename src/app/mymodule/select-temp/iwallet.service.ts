import { Injectable } from '@angular/core';
import {Data, IWallet,DataArr,Tile} from '../allTemp'
@Injectable({
  providedIn: 'root'
})
export class WalletService implements IWallet {
  currency:Data[];
  sum:number;
  val:string;
  tiles: Tile[];
  updateTiles: Tile[];
  
  constructor(){
    this.setCurList(this.currency);
  }


//  Устанавливает currency c типом Data
  setCurList(cur:Data[]):any {
      this.currency = cur;
      return cur;
  }


  updateDataSum(val:string){
     this.currency.map((x)=>{
        if(x.val===val){
          for(let some of this.tiles){
            if(x.val===some.text){
            let idx = WalletService.getIdTile(this.tiles,x.val)
            idx===0?this.tiles[idx].text=x.sum:this.tiles[idx-1].text=x.sum;
          }
        }}
      });
  }

  static getIdTile(ar:Tile[], val:any): number {
    let pos = ar.map((e)=> e.text).indexOf(val);
    return   (pos !== -1)  ? pos: null;
  }


  static getAllId(ar:Tile[], val:any): any {
    let indexes = [], i = -1;
    while ((i = ar.map((e)=> e.text).indexOf(val,i+1)) != -1){
      indexes.push(i);
    }
    console.log(indexes);
    return indexes;
  }


  /**
   * статическая функция для поиска ID
   * возвращает pos по указанной валюте, если не нашло то null
   */
  static getID(ar:Data[], val:string): number {
    let pos = ar.map((e)=> e.val).indexOf(val);
    return (pos !== -1)  ? pos: null;
  }
}
