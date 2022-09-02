import styled from 'styled-components';
import { Colors } from '../../../shared/colors';

interface ListItemProps {
  isSelected: boolean;
}

export const SelectContainer = styled('div')`
position: relative;
  width: 10.5em;
`;

export const SelectHeader = styled('div')`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: ${Colors.blue};
  background: ${Colors.white};
`;

export const SelectListContainer = styled('div')``;

export const SelectList = styled('ul')`
  position: absolute;

  max-height: 200px;
  width: 100%;

  overflow-y: scroll;

  padding: 0;
  margin: 0;

  background: ${Colors.white};

  border: 2px solid ${Colors.light_grey};

  color: ${Colors.blue};

  font-size: 1.3rem;
  font-weight: 500;
 `;

export const ListItem = styled('li')<ListItemProps>`
  list-style: none;
  padding: 0.3em 1em;

  background-color: ${({isSelected}) => isSelected ? Colors.light_grey : Colors.white};

  &:hover {
    background-color: ${Colors.light_grey}
  }
`;

