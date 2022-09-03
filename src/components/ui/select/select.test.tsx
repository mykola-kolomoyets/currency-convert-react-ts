/**
 * MODULES
 */
import { useState } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

/**
 * COMPONENTS
 */
import { Select } from '.';

/**
 * MOCK CONSTANTS
 */
const testSelectOptions = [
  '1',
  '2',
  '3'
];

/**
 * MOCK TEST WRAPPER
 */
const TestSelectWrapper = () => {
  const [value, setValue] = useState(testSelectOptions[0]);

  const onOptionChange = (selected: string) => setValue(selected);

  return (
    <div data-testid='outside-element'>
      <span ></span>
      <Select
        value={value}
        options={testSelectOptions}
        onOptionChangeCallback={onOptionChange}
      />
    </div>
  )
}

describe('<Select /> conponent test', () => {
  afterEach(cleanup);

  it('initial render without crash', () => {
    const { getByTestId } = render(<TestSelectWrapper />);

    const select = getByTestId('select');

    expect(select).toBeInTheDocument();
  });

  it('initial select value is first options item', () => {
    const { getByTestId } = render(<TestSelectWrapper />);

    const select = getByTestId('select');
    const selectTitle = getByTestId('select-title');

    expect(select).toBeInTheDocument();
    expect(selectTitle).toBeInTheDocument();

    expect(selectTitle).toHaveTextContent(testSelectOptions[0]);
  });

  it('options open and close when click on select header', () => {
    const { getByTestId, queryAllByTestId } = render(<TestSelectWrapper />);

    /**
     * INITIAL RENDER
     */
    const select = getByTestId('select');
    const selectHeader = getByTestId('select-header');

    expect(select).toBeInTheDocument();
    expect(selectHeader).toBeInTheDocument();

    /**
     * CLICK ON SELECT HEADER
     */
    fireEvent.click(selectHeader);

    const selectOptions = getByTestId('select-options');
    const selectItems = queryAllByTestId('select-item');

    expect(selectOptions).toBeInTheDocument();

    expect(selectItems).toBeDefined();
    expect(selectItems).toHaveLength(testSelectOptions.length);

    /**
     * CLICK ON SELECT HEADER AGAIN
     */
    fireEvent.click(selectHeader);

    const newSelectOptions = queryAllByTestId('select-options');
    const newSelectItems = queryAllByTestId('select-item');

    expect(newSelectOptions).toHaveLength(0);
    expect(newSelectItems).toHaveLength(0);
  });

  it('change the option of select', () => {
    const clickedItemIndex = 2;

    /**
     * INITIAL RENDER
     */
    const { getByTestId, queryAllByTestId } = render(<TestSelectWrapper />);

    const select = getByTestId('select');
    const selectHeader = getByTestId('select-header');

    expect(select).toBeInTheDocument();
    expect(selectHeader).toBeInTheDocument();

    /**
     * OPEN SELECT OPTIONS
     */
    fireEvent.click(selectHeader);

    const selectOptions = getByTestId('select-options');
    const selectItems = queryAllByTestId('select-item');

    expect(selectOptions).toBeInTheDocument();

    /**
     * CHOOSE ONE OF OPTIONS
     */
    fireEvent.click(selectItems[clickedItemIndex]);

    const newSelectHeader = getByTestId('select-header');
    const newSelectOptions = queryAllByTestId('select-options');

    expect(newSelectHeader).toHaveTextContent(testSelectOptions[clickedItemIndex]);
    expect(newSelectOptions).toHaveLength(0);
  });

  it('click outside the select when it is opened', () => {
    /**
     * INITIAL RENDER
     */
    const { getByTestId, queryAllByTestId } = render(<TestSelectWrapper />);

    const select = getByTestId('select');
    const selectHeader = getByTestId('select-header');

    expect(select).toBeInTheDocument();
    expect(selectHeader).toBeInTheDocument();

    /**
     * OPEN SELECT OPTIONS
     */
    fireEvent.click(selectHeader);

    const selectOptions = getByTestId('select-options');

    expect(selectOptions).toBeInTheDocument();

    /**
     * CLICK OUTSIDE THE SELECT CONTAINER
     */
    const outsideElement = getByTestId('outside-element');

    expect(outsideElement).toBeInTheDocument();

    fireEvent.click(outsideElement);

    setTimeout(() => {
      const newSelectOptions = queryAllByTestId('select-options');

      expect(newSelectOptions).toHaveLength(0);
    });
  })
});
