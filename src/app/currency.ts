export interface Currency {
  query: Query;
  data: Data;
}

export interface Query {
  baseCurrency: any;
  timestamp: any;
}

export interface Data {
  zar: number;
  bdt: number;
  pkr: number;
  inr: number;
}
