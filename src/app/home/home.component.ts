import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../currency.service";
import {Currency} from "../currency";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currencies: any;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getCurrency().subscribe((data:Currency)=>{
      // console.log(data);

      this.currencies = data;
      switch (this.currencies) {
      }
      console.log(this.currencies.constructor);
    })
  }

  refreshCurrencies() {
    this.ngOnInit();
  }
}
