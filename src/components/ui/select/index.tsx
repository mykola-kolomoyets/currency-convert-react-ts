/**
 * MODULES
 */
import { FC, useRef, useState } from 'react'
import { useOnClickOutside } from '../../../shared/hooks/useClickOutside';

/**
 * ASSETS
 */
import ArrowRightIcon from './../../../assets/arrow-right.svg';

/**
 * CONSTANTS / STYLES
 */
import { SelectProps } from './select.props';

import {
  SelectContainer,
  SelectHeader,
  SelectListContainer,
  SelectList,
  ListItem,
  SelectArrow
} from './styles';


export const Select: FC<SelectProps> = ({ value, options, onOptionChangeCallback }) => {
  /**
   * STATE
   */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * HOOKS
   */
  const selectContainerRef = useRef(null);

  /**
   * HELPER FUNCTIONS
   */
  const onToggle = () => setIsOpen(prev => !prev);

  /**
   * EVENT HANDLERS
   */
  const onOptionSelect = (selected: string) => {
    setIsOpen(false);

    onOptionChangeCallback(selected);
  }

  const onSelectBlur = () => setIsOpen(false);

  /**
   * EFFECTS
   */
  useOnClickOutside(selectContainerRef, onSelectBlur);


  return (
    <SelectContainer ref={selectContainerRef} data-testid='select'>
      <SelectHeader onClick={onToggle} data-testid='select-header'>
        <span data-testid='select-title'>
          {value}
        </span>

        <SelectArrow src={ArrowRightIcon} isActive={isOpen} />
      </SelectHeader>

      {isOpen && (
        <SelectListContainer data-testid='select-options'>
          <SelectList>
            {options.map(currency => (
              <ListItem
                data-testid='select-item'
                key={currency}
                onClick={() => onOptionSelect(currency)}
                isSelected={currency === value}
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