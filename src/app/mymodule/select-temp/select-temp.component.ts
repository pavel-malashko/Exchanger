import {Component, OnInit} from '@angular/core';
import { WalletService } from '../select-temp/iwallet.service'
import { ExserviceService } from '../exchange/exservice.service'
import { AllVal, Tile } from '../allTemp'


@Component({
  selector: 'select-overview-example',
  templateUrl: './select-temp.component.html',
  styleUrls: ['./select-temp.component.sass']
})

export class SelectTempComponent  implements OnInit {
  sum:number;
  val:string;
  newSum:number;
  newVal:string;
  tiles:Tile[];
  info:string;
  allVal: AllVal[] = [
    {value: 'USD'},
    {value: 'RUB'},
    {value: 'EUR'},
    {value: 'UAH'},
    {value: 'BYN'},
    {value: 'PLN'},
    {value: 'BGN'},
    {value: 'ILS'},
    {value: 'KZT'},
  ];

  constructor(
    public walletService:WalletService,
    public exchangeService: ExserviceService
  ){}


  pushVal(val:string, sum:number):void {
    this.walletService.sum=sum
    let someCur = {sum:sum,val:val};
    if(val === null || sum === undefined || sum <= 0 || val === undefined) return  null;
    else if(this.walletService.currency === undefined) this.walletService.setCurList([someCur]);
    else this.walletService.currency.push(someCur);
    this.tablePush(val,sum);
    this.val = null;
    this.sum = null;
  }


  tablePush(val,sum){
    if(this.walletService.tiles === undefined){
      this.walletService.tiles = [
        {text: 'Сумма', cols: 2, rows: 1, color: 'lightblue'},
        {text: 'Валюта', cols: 2, rows: 1, color: 'lightgreen'},
        {text:  sum, cols: 2, rows: 1, color: 'lightblue'},
        {text:  val, cols: 2, rows: 1, color: 'lightgreen'},
      ];
    }
   else{
      let data = [{text: sum, cols: 2, rows: 1, color: 'lightblue'},
      {text: val, cols: 2, rows: 1, color: 'lightgreen'}];
      this.walletService.tiles.push(...data)
   }
  }


  clearSum():void{
    this.sum = null;
    this.newSum = null;
  }


  getCur(newVal:string, newSum:number){
    for(let xSum of this.walletService.currency){
     if(newSum>xSum.sum) this.info = "Недостаточно средств для перевода!"; //console.log("ошибка преевода");
     else {
       if(newVal===xSum.val){
       xSum.sum = xSum.sum-newSum;
       this.exchangeService.getCur(newVal,newSum);
       this.walletService.updateDataSum(newVal);
       this.info = `переведено успешно с кошелька ${newSum} ${newVal}`
      }
     }
    }
    this.newSum = null;
    this.newVal = null;
  }


  ngOnInit() {}
  
}
