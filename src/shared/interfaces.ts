
/**
 * COMMON
 */
export interface Rates {
  [key: string]: number;
}

/**
 * API
 */
interface ResponseBase {
  result: 'success' | 'error';
  base_code: string;
}

export interface  ExchangeRateResponse extends ResponseBase {
  target_code: string;
  conversion_rate: number;
}

export interface AllRatesResponse extends ResponseBase {
  conversion_rates: Rates
}