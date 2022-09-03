/**
 * MODULES
 */
import styled from 'styled-components';

/**
 * CONSTANTS
 */
import { Colors } from '@shared/colors';


export const HeaderWrapper = styled.header`
  background-color: ${Colors.dark_purple};

  display: flex;
  justidy-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
position: relative;
  display: flex;
  justify-content: space-between;
  gap: 32px;

  max-width: 1366px;
  width: 100%;

  padding: 12px 16px;
  margin: 0 auto;
`;

export const HeaderLogo = styled.h1`
  flex-shrink: 1;
  color: ${Colors.white};
  letter-spacing: 0.025em;

  @media screen and (max-width: 750px) { 
    font-size: 1.5em;
  }
`;