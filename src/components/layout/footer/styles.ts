/**
 * MODULES
 */
 import styled from 'styled-components';

 /**
  * CONSTANTS
  */
import { Colors } from '../../../shared/colors';


export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Colors.dark_purple};
`;

export const FooterText = styled.p`
  color: ${Colors.white};

  font-size: 1em;
`;