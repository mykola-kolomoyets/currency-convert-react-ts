/**
 * MODULES
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';

/**
 * API
 */
import useExchangeRate from '@api/hooks/useExchangeRate';

/**
 * COMPONENTS
 */
import { ExchangeRate } from '@ui';

/**
 * CONSTANTS
 */
const initialResponse: ReturnType<typeof useExchangeRate> = {
  isLoading: true,
  response: undefined,
  error: undefined,
  isFetched: false
}

const fetchedResponse: ReturnType<typeof useExchangeRate> = {
  isLoading: false,
  response: 37.1456,
  error: undefined,
  isFetched: true
}

/**
 * MOCKING
 */
jest.mock('@api/hooks/useExchangeRate', () => jest.fn());

const mockedUseExchangeRate = useExchangeRate as jest.MockedFunction<typeof useExchangeRate>;


describe('<ExchangeRate /> test', () => {
  beforeEach(() => {
    mockedUseExchangeRate.mockImplementation(() => initialResponse);
  });

  afterEach(() => {
    cleanup();

    jest.clearAllMocks();
  });

  it('initial render without crash', () => {
    const { getByTestId } = render(<ExchangeRate />);

    const wrapper = getByTestId('rate-wrapper');

    expect(wrapper).toBeInTheDocument();

    /**
     * INITIAL STATE CHECK
     */
    const eurRate = getByTestId('eur-rate');
    const usdRate = getByTestId('usd-rate');

    expect(eurRate).toBeInTheDocument();
    expect(usdRate).toBeInTheDocument();

    expect(eurRate).toHaveTextContent('.....');
    expect(usdRate).toHaveTextContent('.....');
  });

  it('display the fetched rate', async () => {
    const { getByTestId } = render(<ExchangeRate />);

    const wrapper = getByTestId('rate-wrapper');

    expect(wrapper).toBeInTheDocument();

    /**
     * CHECK IF CORRECT VALUE PASSES AFTER FETCHING
     */
    await mockedUseExchangeRate.mockImplementation(() => fetchedResponse);

    const eurRate = getByTestId('eur-rate');
    const usdRate = getByTestId('usd-rate');

    setTimeout(() => {
      expect(eurRate).toHaveTextContent(fetchedResponse.response!.toFixed(2));
      expect(usdRate).toHaveTextContent(fetchedResponse.response!.toFixed(2));
    })
  })



});