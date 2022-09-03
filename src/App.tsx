/* eslint-disable react-hooks/exhaustive-deps */
/**
 * MODULES
 */
import { FC, useEffect, useMemo, useState } from 'react';

/**
 * API
 */
import CurrencyService from './api/services/currency.service';

/**
 * COMPONENTS
 */
import { CurrencyInput, Footer, Header } from './components/layout';

/**
 * CONSTANTS / STYLES
 */
import { Rates } from './shared/interfaces';

import './app.scss';
import { InputsWrapper, Main, Wrapper } from './app.styles';


const App: FC = () => {
  /**
   * STATE
   */
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('USD');

  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(1);

  const [allRates, setAllRates] = useState<Rates>({});

  /**
   * MEMOIZED
   */
  const allCurrencies = useMemo(() => Object.keys(allRates), [allRates]);

  /**
   * HELPERS
   */
  const getRateForInput = (input: 'from' | 'to') => {
    const fromRate = allRates[fromCurrency];
    const toRate = allRates[toCurrency];

    return input === 'from' ? fromRate / toRate : toRate / fromRate;
  };

  const calculateNewToAmount = (amount: number, currency: string) => {
    const fromRate = allRates[fromCurrency];
    const toRate = allRates[currency];

    setToAmount(amount * (toRate / fromRate));
    setFromAmount(amount);
  }

  const calculateNewFromAmount = (amount: number, currency: string) => {
    const fromRate = allRates[currency];
    const toRate = allRates[toCurrency];

    setFromAmount(amount * (fromRate / toRate));
    setToAmount(amount);
  }

  /**
   * EVENT HANDLERS
   */
  const onFromCurrencyChange = (currency: string) => setFromCurrency(currency);
  const onToCurrencyChange = (currency: string) => setToCurrency(currency);

  const onFromAmountChange = (amount: number) => setFromAmount(amount);
  const onToAmountChange = (amount: number) => setToAmount(amount);

  /**
   * EFFECTS
   */
  useEffect(() => {
    calculateNewFromAmount(toAmount, fromCurrency);
  }, [fromCurrency, toAmount]);

  useEffect(() => {
    calculateNewToAmount(fromAmount, toCurrency);
  }, [toCurrency, fromAmount]);

  useEffect(() => {
    CurrencyService.getAllRates('USD')
      .then(({ data }) => {
        const secondCurrency = Object.keys(data.conversion_rates)[1];

        setAllRates(data.conversion_rates);

        setFromCurrency(data.base_code);
        setToCurrency(secondCurrency);

        setFromAmount(1);
      });
  }, []);

  return (
    <Wrapper>
      <Header />

      <Main>
        <InputsWrapper>
          <CurrencyInput
            label='From'
            amount={fromAmount}
            currency={fromCurrency}
            secondCurrency={toCurrency}
            rate={getRateForInput('to') || undefined}
            currencies={allCurrencies}
            onCurrencyChange={onFromCurrencyChange}
            onAmountChange={onFromAmountChange}
          />

          <CurrencyInput
            label='To'
            amount={toAmount}
            currency={toCurrency}
            secondCurrency={fromCurrency}
            rate={getRateForInput('from') || undefined}
            currencies={allCurrencies}
            onCurrencyChange={onToCurrencyChange}
            onAmountChange={onToAmountChange}
          />
        </InputsWrapper>

      </Main>

      <Footer />
    </Wrapper>
  );
}

export default App;
