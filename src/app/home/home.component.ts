import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../currency.service";
//import any = jasmine.any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currencies: any[] = [];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getCurrency().subscribe((data:any)=>{
      console.log(data);
      this.currencies = data;
      console.log(data.toString())
    })
  }

}
