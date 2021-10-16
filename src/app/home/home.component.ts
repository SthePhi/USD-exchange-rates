import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../currency.service";
import {Currency} from "../currency";
import {formatCurrency} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bdt: any;
  inr: any;
  pkr: any;
  zar: any;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getCurrency().subscribe((data:Currency)=>{
      console.log(data.data);
      this.bdt = data.data.BDT;
      this.inr = data.data.INR;
      this.pkr = data.data.PKR;
      this.zar = data.data.ZAR;
    })
  }

  refreshCurrencies() {
    this.ngOnInit();
  }
}
