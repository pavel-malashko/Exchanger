import { Component, OnInit } from '@angular/core';
import { ExserviceService } from './exservice.service';
import { AllVal, Tile } from '../allTemp'

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.sass'],
})

export class ExchangeComponent  implements OnInit {
  tiles: Tile[];
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

  constructor(public exchangeService: ExserviceService){}

  AddCachCur(sum:number,val:string){
    if(val === undefined || sum === undefined || sum <= 0 || val === undefined) return  null;
    this.exchangeService.SetCash(sum,val);
  }


  clearSum():void{
    this.exchangeService.cashSum = null;
  }


  exchangeVal(cashCur:string):any{
    let idx = this.exchangeService.findData();
    if (idx.length===0) console.log("ничего не выбрано");
    else{
      for (let i = 0; i < idx.length; i++) {
        let value = this.exchangeService.frontData[idx[i]-1].text;
        let summa = this.exchangeService.frontData[idx[i]-2].text;
        console.log(value,summa);
        this.exchangeService.exchangeVal(value,summa,cashCur);
        this.exchangeService.frontData.splice(idx[i]-2,3);
        console.log(this.exchangeService.frontData);
      };
    }
  }


  setRateData(cashRate:string,rate:number):any{
    this.exchangeService.setRate(cashRate,rate);
  }


  ngOnInit() {}

}
