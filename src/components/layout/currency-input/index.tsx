/**
 * MODULES
 */
import { FC } from 'react';

/**
 * COMPONENTS
 */
import { Select } from '@ui';

/**
 * CONSTANTS / STYLES
 */
import { CurrencyInputProps } from './currency-input.props';

import {
  CurrencyInputContainer,
  CurrencyInputHeader,
  CurrencyInputLabel,
  InputContainer,
  NumberInput,
  RateLabelAmount,
  RateLabelContainer,
  RateLabelText
} from './styles';


export const CurrencyInput: FC<CurrencyInputProps> = ({
  label,
  currency,
  secondCurrency,
  rate,
  amount,
  currencies,
  onCurrencyChange,
  onAmountChange
}) => (
  <CurrencyInputContainer>
    <CurrencyInputHeader>
      {label && <CurrencyInputLabel>{label}</CurrencyInputLabel>}

      <Select
        value={currency}
        options={currencies}
        onOptionChangeCallback={onCurrencyChange}
      />
    </CurrencyInputHeader>

    <InputContainer>
      <NumberInput
        value={amount}
        maxLength={10}
        allowLeadingZeros={false}
        allowNegative={false}
        decimalScale={2}
        onValueChange={({ value }) => onAmountChange(+value)}
        thousandSeparator
      />

      {secondCurrency && rate && (
        <RateLabelContainer>
          <RateLabelText>
            1 {currency} =
          </RateLabelText>

          <RateLabelAmount
            value={rate}
            displayType={'text'}
            decimalScale={2}
            thousandSeparator
          />

          <RateLabelText>
            {secondCurrency}
          </RateLabelText>
        </RateLabelContainer>
      )}
    </InputContainer>
  </CurrencyInputContainer>
);