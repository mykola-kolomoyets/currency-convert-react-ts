/**
 * MODULES
 */
import NumberFormat from 'react-number-format';
import styled from 'styled-components';

/**
 * CONSTANTS
 */
import { Colors } from '../../../shared/colors';


export const CurrencyInputContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding: 1.5em;

  border-radius: 0.4em;

  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);

  background-color: ${Colors.dark_purple};
`;

export const NumberInput = styled(NumberFormat)`
  padding: 0.1em 0.5em;
  font-size: 3em;

  flex-shrink: 1;

  max-width: 7em;

  font-weight: bold;

  background-color: ${Colors.white};

  outline: none;
  border: none;

  @media screen and (max-width: 900px) {
    max-width: 5em;
  }
  
  @media screen and (max-width: 750px) {
    max-width: 7em;
  }

  @media screen and (max-width: 400px) {
    font-size: 2em;
  }
`;

export const CurrencyInputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const CurrencyInputLabel = styled.h3`
  font-size: 2em;
  font-weight: bold;

  color: ${Colors.white};

  @media screen and (max-width: 400px) {
    font-size: 1.5em;
  }
`;

export const InputContainer = styled.div`
  background-color: ${Colors.white};

  border-radius: 0.3em;

  padding: 0.5em 0.5em 1em 0.5em;
`;

export const RateLabelContainer = styled.div`
  display: flex;

  gap: 4px;

  padding: 0 1.5em;
`;

export const RateLabelText = styled.p`
  color: ${Colors.blue}
`;

export const RateLabelAmount = styled(NumberFormat)`
  color: ${Colors.blue}
`;