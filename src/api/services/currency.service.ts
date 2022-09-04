/**
 * MODULES
 */
import { AxiosResponse } from 'axios';

/**
 * CONSTANTS
 */
import { ExchangeRateResponse, AllRatesResponse } from '@shared/interfaces';

import api from '@api/config';


export default class CurrencyService {
  /**
   * ROUTES PATHS
   */
  private static paths = {
    getPair: '/pair',
    latest: '/latest'
  }

  /**
   * ROUTES METHODS
   */
  public static getExchangeRate(from: string, to: string): Promise<AxiosResponse<ExchangeRateResponse>> {
    return api.get(`${this.paths.getPair}/${from}/${to}`);
  }

  public static getAllRates(curency: string): Promise<AxiosResponse<AllRatesResponse>> {
    return api.get(`${this.paths.latest}/${curency}`);
  }
}