import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import { Colors } from '../../../shared/colors';

export const CurrencyInputContainer = styled.article`
  padding: 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
`;

export const NumberInput = styled(NumberFormat)`
  padding: 0.5em 1em;
  border-radius: 0.2em;

  font-size: 3em;
`;