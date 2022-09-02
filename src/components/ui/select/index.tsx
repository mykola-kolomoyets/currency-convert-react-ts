import React, { FC, useState } from 'react'
import { CurrencyCode } from '../../../shared/currencies';

import { SelectContainer, SelectHeader, SelectListContainer, SelectList, ListItem } from './styles';

interface SelectProps {
  initialOption: CurrencyCode;
  onOptionChangeCallback: (value: CurrencyCode) => void;
}

export const Select: FC<SelectProps> = ({ initialOption, onOptionChangeCallback }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<CurrencyCode>(initialOption);

  const onToggle = () => setIsOpen(prev => !prev);

  const onOptionSelect = (value: CurrencyCode) => {
    setSelectedOption(value);
    setIsOpen(false);

    onOptionChangeCallback(value);
  }

  return (
    <SelectContainer>
      <SelectHeader onClick={onToggle}>{selectedOption}</SelectHeader>

      {isOpen && (
        <SelectListContainer>
          <SelectList>
            {Object.values(CurrencyCode).map(currency => (
              <ListItem
                key={currency}
                onClick={() => onOptionSelect(currency)}
                isSelected={currency === selectedOption}
              >
                {currency}
              </ListItem>
            ))}
          </SelectList>
        </SelectListContainer>
      )}
    </SelectContainer>
  )
};