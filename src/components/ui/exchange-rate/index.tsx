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
    <ExchangeRateWrapper data-testid='rate-wrapper'>
      <CurrencyContainer>
        <CurrencyLogo src={EULogo} alt="EU" />

        <CurrencyInfoWrapper>
          <CurrencyInfo>EUR</CurrencyInfo>
          <CurrencyAmount data-testid='eur-rate'>{isEurRateFetched && eurRate ? eurRate.toFixed(2) : '.....'}</CurrencyAmount>
        </CurrencyInfoWrapper>
      </CurrencyContainer>

      <hr />

      <CurrencyContainer>
        <CurrencyLogo src={USALogo} alt="USA" />

        <CurrencyInfoWrapper>
          <CurrencyInfo>USD</CurrencyInfo>
          <CurrencyAmount data-testid='usd-rate'>{isUsdRateFetched && usdRate ? usdRate.toFixed(2) : '.....'}</CurrencyAmount>
        </CurrencyInfoWrapper>
      </CurrencyContainer>
    </ExchangeRateWrapper>
  )
};