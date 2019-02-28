import { Injectable } from '@angular/core';
import { WalletService } from '../select-temp/iwallet.service'
import { IExchange ,DataArr, Data,Tile} from '../allTemp'
@Injectable({
  providedIn: 'root'
})
export class ExserviceService extends WalletService implements IExchange {
  baseCurIdx:number;
  dataArr: Data[];
  frontData: Tile[];
  rateData:Map<Number,Number> = new Map<number,number>();
  cashSum:number;
  cashVal:string;
  dataCash:Data[];
  tiles:Tile[];
  checked:boolean = false;
  curs:number;
  /**
   * setBaseCur Устанавливает базовый индекс для валюты
   * возвращает индекс
   */


  SetCash(sum:number,val:string):any{
    let data = {sum:sum,val: val};
    if(val === undefined || sum === undefined || sum <= 0 || val === undefined) return  null;
    else if(this.dataCash === undefined) this.dataCash=[data];
    else this.dataCash.push(data);
    this.tablePush(val,sum);
    return this.dataCash;
  }


  tablePush(val,sum){
    this.dataCash.map(x=>
    {if(this.tiles === undefined){
      this.tiles = [
        {text: 'Сумма', cols: 2, rows: 1, color: 'lightblue'},
        {text: 'Валюта', cols: 2, rows: 1, color: 'lightgreen'},
        {text:  x.sum, cols: 2, rows: 1, color: 'lightblue'},
        {text:  x.val, cols: 2, rows: 1, color: 'lightgreen'},
       ];
     }
     else if (x.val === val && x.sum === sum ){
       this.tiles.push({text: x.sum, cols: 2, rows: 1, color: 'lightblue'},
       {text: x.val, cols: 2, rows: 1, color: 'lightgreen'});
      }
    })
      return this.tiles
  }


  getCur(val:string,sum:number){
    let data = {sum:sum,val: val};
    if(val === undefined || sum === undefined || sum <= 0) return  null;
    else if(this.dataArr === undefined){
      this.dataArr = [data];
      this.tableData(data);
    }
    else{
      this.dataArr.push(data);
      this.tableData(data);
    }
    return this.dataArr;
  }


  tableData(data){
    if(this.dataArr.length===1){
      this.frontData = [
        {text: 'Сумма', cols: 1, rows: 1, color: 'lightblue'},
        {text: 'Валюта', cols: 1, rows: 1, color: 'lightgreen'},
        {text:  "Выбрать", cols: 1, rows: 1, color: 'lightgreen'},
        {text:  data.sum, cols: 1, rows: 1, color: 'lightblue'},
        {text:  data.val, cols: 1, rows: 1, color: 'lightgreen'},
        {text:  this.checked, cols: 1, rows: 1, color: 'lightgreen'},
      ];
    }
    else{
        this.frontData.push(  {text:  data.sum, cols: 1, rows: 1, color: 'lightblue'},
          {text:  data.val, cols: 1, rows: 1, color: 'lightgreen'},
          {text:  this.checked, cols: 1, rows: 1, color: 'lightgreen'});
    }
    return this.frontData;
  }


  findData():any{
      let idx:number = WalletService.getAllId(this.frontData,true); //неправльно выводит ближайший, а надо все
      return idx;
  }


  setRate(val:string,rate:number):any{
    let idx: number = ExserviceService.getID(this.dataArr,val);
    if(idx === null) {
      this.dataArr.push({sum:0,val:val});
      idx = this.dataArr.length -1;
    }
    this.rateData.set(idx,rate);
    return this.rateData;
  }


  transfer(sum:number,val:string): any {
    let idx:number = WalletService.getID(this.dataCash,val);
    if(sum < 0 && (this.dataArr[idx].sum + sum) < 0 )  return false;
    else this.dataArr[idx].sum = this.dataArr[idx].sum + sum;
    return this.dataArr[idx].sum;
  }


  exchangeVal(val:string, sum:number, newVal:string):boolean {
    let idx: number = WalletService.getID(this.dataArr,val);
    let valRate:any =  this.rateData.get(idx);
    let newSum:number = sum*valRate;
    if( valRate === undefined ){
      console.log('не найден курс валюта',val);
      return false;
    }
    else{
      //wallet.transfer(-sum,val);
       this.transfer(-newSum,newVal);
       this.transfer(sum,val);  //исправить
       this.transfer(newSum,newVal);
      return true;
    }
  }
}
