import { CurrencyCode } from "./currencies";

interface ExchangeBase {
  result: 'success' | 'error';
  base_code: CurrencyCode;
  target_code: CurrencyCode;
  conversion_rate: number;
}

export interface ExchangeRateResponse extends ExchangeBase {};

export interface ConvertResponse extends ExchangeRateResponse {
  conversion_result: number;
}