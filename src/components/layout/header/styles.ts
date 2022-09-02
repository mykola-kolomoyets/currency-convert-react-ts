import styled from 'styled-components';
import { Colors } from '../../../shared/colors';

export const HeaderWrapper = styled.header`
  background-color: ${Colors.light_cyan};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;

  width: calc(min(100%, 1360px));
  padding: 12px 16px;
  margin: 0 auto;
`;

export const HeaderLogo = styled.h1`
  color: ${Colors.black};
`;