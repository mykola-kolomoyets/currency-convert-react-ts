/**
 * MODULES
 */
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

/**
* API
*/
import useAllRates from '@api/hooks/useAllRates';

/**
 * COMPONENTS
 */
import { Converter } from '@layout';

/**
 * CONSTANTS
 */
const initialResponse: ReturnType<typeof useAllRates> = {
  isLoading: true,
  response: undefined,
  error: undefined,
  isFetched: false
}

const ratesResponse: ReturnType<typeof useAllRates> = {
  isLoading: true,
  response: {
    result: 'success',
    base_code: 'USD',
    conversion_rates: {
      USD: 1,
      UAH: 37.14,
      EUR: 1.01,
      RUR: 250
    }
  },
  error: undefined,
  isFetched: false
}

/**
 * MOCKING
 */
jest.mock('@api/hooks/useAllRates', () => jest.fn());

const mockedUseAllRates = useAllRates as jest.MockedFunction<typeof useAllRates>;


describe('<Converter /> test', () => {
  beforeEach(() => {
    mockedUseAllRates.mockImplementation(() => initialResponse);
  });

  afterEach(() => {
    cleanup();

    jest.clearAllMocks();
  });

  it('displaying the correct amounts after change in first input', async () => {
    const { getByTestId, queryAllByTestId } = render(<Converter />);

    let converterInputs = queryAllByTestId('converter-amount-input');

    await mockedUseAllRates.mockImplementation(() => ratesResponse);


    /**
     * ON FIRST INPUT VALUE CHANGE
     */
    setTimeout(() => {
      converterInputs = queryAllByTestId('converter-amount-input');

      expect(converterInputs).toHaveLength(2);

      fireEvent.change(converterInputs[0], { target: { value: '1' } });

      expect(converterInputs[0]).toHaveDisplayValue('1');
      expect(converterInputs[1]).toHaveDisplayValue((1 * ratesResponse.response!.conversion_rates.UAH).toFixed(2));
    }, 0);

  });

  it('displaying the correct amounts after change in second input', async () => {
    const { getByTestId, queryAllByTestId } = render(<Converter />);

    let converterInputs = queryAllByTestId('converter-amount-input');

    await mockedUseAllRates.mockImplementation(() => ratesResponse);

    /**
     * ON SECOND INPUT VALUE CHANGE
     */
    setTimeout(() => {
      converterInputs = queryAllByTestId('converter-amount-input');

      expect(converterInputs).toHaveLength(2);

      fireEvent.change(converterInputs[1], { target: { value: '3.71' } });

      expect(converterInputs[0]).toHaveDisplayValue((3.71 / ratesResponse.response!.conversion_rates.UAH).toFixed(2));
      expect(converterInputs[1]).toHaveDisplayValue('3.71');
    }, 0);
  })
});