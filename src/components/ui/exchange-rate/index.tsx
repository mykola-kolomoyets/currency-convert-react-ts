/**
 * MODULES
 */
import { FC, useEffect, useState } from 'react';

/**
 * API
 */
import CurrencyService from '../../../api/services/currency.service';

/**
 * ASSETS
 */
import EULogo from './../../../assets/european-union.png';
import USALogo from './../../../assets/usa.png';

/**
 * CONSTANTS / STYLES
 */
import { euro, hryvnia, usd } from './constants';

import {
  CurrencyLogo,
  CurrencyContainer,
  ExchangeRateWrapper,
  CurrencyInfo,
  CurrencyInfoWrapper,
  CurrencyAmount
} from './styles';


export const ExchangeRate: FC = () => {
  /**
   * STATE
   */
  const [EURRate, setEURRate] = useState(0);
  const [USDRate, setUSDRate] = useState(0);

  const [isFetching, setIsFetching] = useState(true);

  /**
   * HELPER FUNCTIONS
   */
  const fetchRates = async () => {
    setIsFetching(true);

    await Promise.all([
      CurrencyService.getExchangeRate(euro, hryvnia),
      CurrencyService.getExchangeRate(usd, hryvnia)
    ])
      .then(([eurResponse, usdResponse]) => {
        setEURRate(eurResponse.data.conversion_rate);
        setUSDRate(usdResponse.data.conversion_rate);
      })
      .catch(console.log)
      .finally(() => setIsFetching(false));
  }

  /**
   * EFFECTS
   */
  useEffect(() => {
    fetchRates();
  }, []);

  return (
    <ExchangeRateWrapper>
      <CurrencyContainer>
        <CurrencyLogo src={EULogo} alt="EU" />

        <CurrencyInfoWrapper>
          <CurrencyInfo>EUR</CurrencyInfo>
          <CurrencyAmount>{isFetching ? '.....' : EURRate.toFixed(2)}</CurrencyAmount>
        </CurrencyInfoWrapper>
      </CurrencyContainer>

      <hr />

      <CurrencyContainer>
        <CurrencyLogo src={USALogo} alt="USA" />

        <CurrencyInfoWrapper>
          <CurrencyInfo>USD</CurrencyInfo>
          <CurrencyAmount>{isFetching ? '.....' : USDRate.toFixed(2)}</CurrencyAmount>
        </CurrencyInfoWrapper>
      </CurrencyContainer>
    </ExchangeRateWrapper>
  )
};