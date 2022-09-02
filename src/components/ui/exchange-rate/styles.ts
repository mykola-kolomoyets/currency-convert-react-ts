import styled from 'styled-components';

export const CurrencyLogo = styled.img`
  width: 24px;
  height: 24px;
`;

export const CurrencyContainer = styled.div`
  display: flex;

  align-items: center;

  gap: 8px;
`;

export const ExchangeRateWrapper = styled.article`
  display: inline-flex;

  flex-direction: row;
  aligh-items: center;

  gap: 16px;
`;

export const CurrencyInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CurrencyInfo = styled.div`
  font-size: 1em;
  line-height: 24px;
`;

export const CurrencyAmount = styled(CurrencyInfo)`
  font-weight: bold;
`;