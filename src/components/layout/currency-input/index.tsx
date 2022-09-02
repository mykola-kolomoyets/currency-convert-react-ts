import React, { FC } from 'react';
import NumberFormat from 'react-number-format';

import { CurrencyCode } from '../../../shared/currencies';

import { Select } from '../../ui';
import { CurrencyInputContainer, NumberInput } from './styles';

interface CurrencyInputProps {
  amount: number;

  onCurrencyChange: (selectedCurrency: CurrencyCode) => void;
  onAmountChange: (amount: number) => void;
}

export const CurrencyInput: FC<CurrencyInputProps> = ({ amount, onCurrencyChange, onAmountChange }) => {

  return (
    <CurrencyInputContainer>
      <Select initialOption={CurrencyCode.USD} onOptionChangeCallback={onCurrencyChange} />

      <div>
        <NumberInput
          value={amount}
          onValueChange={({ value }) => onAmountChange(+value)}
          thousandSeparator
        />
      </div>
    </CurrencyInputContainer>
  )
}