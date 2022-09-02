import React, { useState } from 'react';

import './app.scss';
import { Wrapper } from './app.styles';

import { CurrencyInput, Header } from './components/layout';
import { CurrencyCode } from './shared/currencies';

function App() {
  const [fromCurrency, setFromCurrency] = useState<CurrencyCode>(CurrencyCode.USD);
  const [toCurrency, setToCurrency] = useState<CurrencyCode>(CurrencyCode.USD);

  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  const onFromCurrencyChange = (currency: CurrencyCode) => setFromCurrency(currency);
  const onToCurrencyChange = (currency: CurrencyCode) => setToCurrency(currency);

  const onFromAmountChange = (amount: number) => setFromAmount(amount);
  const onToAmountChange = (amount: number) => setToAmount(amount);


  return (
    <Wrapper>
      <Header />

      <main>
        <section>
          <CurrencyInput
            amount={fromAmount}
            onCurrencyChange={onFromCurrencyChange}
            onAmountChange={onFromAmountChange}
          />
        </section>
      </main>

      <footer>
        <p>by Mykola Kolomoyets, 2022</p>
      </footer>
    </Wrapper>
  );
}

export default App;
