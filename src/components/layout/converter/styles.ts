/**
 * MODULES
 */
import styled from 'styled-components';

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