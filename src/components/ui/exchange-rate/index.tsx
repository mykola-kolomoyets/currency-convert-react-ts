/**
 * MODULES
 */
import { FC } from 'react';

/**
 * API
 */
import { useExchangeRate } from '@api/hooks';

/**
 * ASSETS
 */
import EULogo from '@assets/european-union.png';
import USALogo from '@assets/usa.png';

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
   * FETCHING 
   */
  const {
    response: eurRate,
    isFetched: isEurRateFetched
  } = useExchangeRate(euro, hryvnia);

  const {
    response: usdRate,
    isFetched: isUsdRateFetched
  } = useExchangeRate(usd, hryvnia);


  return (
    <ExchangeRateWrapper>
      <CurrencyContainer>
        <CurrencyLogo src={EULogo} alt="EU" />

        <CurrencyInfoWrapper>
          <CurrencyInfo>EUR</CurrencyInfo>
          <CurrencyAmount>{isEurRateFetched && eurRate ? eurRate.toFixed(2) : '.....'}</CurrencyAmount>
        </CurrencyInfoWrapper>
      </CurrencyContainer>

      <hr />

      <CurrencyContainer>
        <CurrencyLogo src={USALogo} alt="USA" />

        <CurrencyInfoWrapper>
          <CurrencyInfo>USD</CurrencyInfo>
          <CurrencyAmount>{isUsdRateFetched && usdRate ? usdRate.toFixed(2) : '.....'}</CurrencyAmount>
        </CurrencyInfoWrapper>
      </CurrencyContainer>
    </ExchangeRateWrapper>
  )
};