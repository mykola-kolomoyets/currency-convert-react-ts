/**
 * MODULES
 */
import { FC } from 'react';

/**
 * COMPONENTS
 */
import { ExchangeRate } from '@ui';

/**
 * CONSTANTS / STYLES
 */
import { HeaderContainer, HeaderLogo, HeaderWrapper } from './styles';


export const Header: FC = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <HeaderLogo>Kolo Converter</HeaderLogo>

      <ExchangeRate />
    </HeaderContainer>

  </HeaderWrapper>
)