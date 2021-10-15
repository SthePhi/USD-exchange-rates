import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {retry, catchError} from "rxjs/operators";
import {Currency} from "./currency";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private CURRENCY_URL = "https://freecurrencyapi.net/api/v2/latest";

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent){
      errorMessage = 'Error: ${error.error.message}';
    } else{
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getCurrency(){
    return this.http.get<Currency>(this.CURRENCY_URL).pipe(retry(3), catchError(this.handleError));
  }
}
