/**
 * MODULES
 */
import styled from 'styled-components';

/**
 * CONSTANTS
 */
import { Colors } from '@shared/colors';


export const CurrencyLogo = styled.img`
  width: 24px;
  height: 24px;

  @media screen and (max-width: 500px) {
    display: none;
  }
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

  color: ${Colors.white};
`;

export const CurrencyAmount = styled(CurrencyInfo)`
  font-weight: bold;
`;