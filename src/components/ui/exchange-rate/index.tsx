import { FC, useEffect, useState } from 'react';

import { CurrencyService } from '../../../api';

import EULogo from './../../../assets/european-union.png';
import USALogo from './../../../assets/usa.png';

import { CurrencyCode } from '../../../shared/currencies';

import { euro, hryvnia } from './constants';

import { CurrencyLogo, CurrencyContainer, ExchangeRateWrapper, CurrencyInfo, CurrencyInfoWrapper, CurrencyAmount } from './styles';

export const ExchangeRate: FC = () => {
  const [EURRate, setEURRate] = useState(0);
  const [USDRate, setUSDRate] = useState(0);

  // useEffect(() => {
  //   Promise.all([
  //     CurrencyService.getExchangeRate(euro, hryvnia),
  //     CurrencyService.getExchangeRate(euro, hryvnia)
  //   ]).then(([eurResponse, usdResponse]) => {
  //     setEURRate(eurResponse.data.conversion_rate);
  //     setUSDRate(usdResponse.data.conversion_rate);
  //   });
  // }, []);

  return (
    <ExchangeRateWrapper>
      <CurrencyContainer>
        <CurrencyLogo src={EULogo} alt="EU" />

        <CurrencyInfoWrapper>
          <CurrencyInfo>{CurrencyCode.EUR}</CurrencyInfo>
          <CurrencyAmount>{EURRate}</CurrencyAmount>

        </CurrencyInfoWrapper>

      </CurrencyContainer>

      <hr />

      <CurrencyContainer>
        <CurrencyLogo src={USALogo} alt="EU" />

        <CurrencyInfoWrapper>
          <CurrencyInfo>{CurrencyCode.USD}</CurrencyInfo>
          <CurrencyAmount>{USDRate}</CurrencyAmount>

        </CurrencyInfoWrapper>
      </CurrencyContainer>
    </ExchangeRateWrapper>
  )
};