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

  it('initial render without crash', async () => {
    const { getByTestId, queryAllByTestId } = render(<Converter />);

    const wrapper = getByTestId('converter-wrapper');
    const converterInputs = queryAllByTestId('converter-amount-input');
    const converterRatesLabels = queryAllByTestId('converter-rate-label');

    expect(wrapper).toBeInTheDocument();

    expect(converterRatesLabels).toHaveLength(0);

    expect(converterInputs).toHaveLength(2);
    converterInputs.forEach(input => expect(input).toHaveDisplayValue('0'));
  });

  it('displaying the correct rate after fetching', async () => {
    const { queryAllByTestId } = render(<Converter />);

    /**
     * BEFORE FETCH 
     */
    let converterRatesLabels = queryAllByTestId('converter-rate-label');

    expect(converterRatesLabels).toHaveLength(0);

    await mockedUseAllRates.mockImplementation(() => ratesResponse);

    /**
     * AFTER FETCH 
     */
    setTimeout(() => {
      converterRatesLabels = queryAllByTestId('converter-rate-label');

      expect(converterRatesLabels).toHaveLength(2);

      expect(converterRatesLabels[0]).toHaveTextContent(ratesResponse.response!.conversion_rates.UAH.toFixed(2));
      expect(converterRatesLabels[1]).toHaveTextContent((1 / ratesResponse.response!.conversion_rates.UAH).toFixed(2));
    }, 0);
  })
});