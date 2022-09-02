import { FC } from 'react';

import { ExchangeRate } from '../../ui';

import { HeaderContainer, HeaderLogo, HeaderWrapper } from './styles';

export const Header: FC = () => {

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>Test Converter</HeaderLogo>

        <ExchangeRate />
      </HeaderContainer>

    </HeaderWrapper>
  )
}