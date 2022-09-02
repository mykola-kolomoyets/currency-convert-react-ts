import { CurrencyCode } from './currencies';


export interface  ExchangeRateResponse {
  result: 'success' | 'error';
  base_code: CurrencyCode;
  target_code: CurrencyCode;
  conversion_rate: number;
}

export interface ConvertResponse extends ExchangeRateResponse {
  conversion_result: number;
}