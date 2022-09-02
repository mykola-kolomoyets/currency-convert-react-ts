import { AxiosResponse } from "axios";

import { CurrencyCode } from "../../shared/currencies";
import { ExchangeRateResponse, ConvertResponse } from "../../shared/interfaces";

import api from './../config';

export class CurrencyService {
  private static paths = {
    getPair: '/pair'
  }

  public static getExchangeRate(from: CurrencyCode, to: CurrencyCode): Promise<AxiosResponse<ExchangeRateResponse>> {
    return api.get(`${this.paths.getPair}/${from}/${to}`);
  }

  public static convert(from: CurrencyCode, to: CurrencyCode, amount: number): Promise<AxiosResponse<ConvertResponse>> {
    return api.get(`${this.paths.getPair}/${from}/${to}/${amount}`);
  }
}