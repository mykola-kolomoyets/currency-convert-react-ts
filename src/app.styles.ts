/**
 * MODULES
 */
import styled from 'styled-components';

/**
 * CONSTANTS
 */
import { Colors } from './shared/colors';


export const Wrapper = styled.div` 
  min-height: 100vh;
  width: 100vw;

  display: grid;

  grid-template-rows: 65px 1fr 50px;

  background-color: ${Colors.black}
`;

export const Main = styled.main`
  padding: 2em;

  display: grid;

  place-items: center;

  @media screen and (max-width: 750px) { 
    padding: 0;
  }
`;

export const InputsWrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 2em;

  @media screen and (max-width: 750px) { 
    grid-template-columns: 1fr;
  }
  `;

export const SwapContainer = styled.div`
  display: grid;

  place-items: center;
`;