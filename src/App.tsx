/**
 * MODULES
 */
import { FC } from 'react';

/**
 * COMPONENTS
 */
import { Converter, Footer, Header } from '@layout';

/**
 * CONSTANTS / STYLES
 */
import { Main, Wrapper } from './app.styles';

import './app.scss';


const App: FC = () => (
  <Wrapper>
    <Header />

    <Main>
      <Converter />

    </Main>

    <Footer />
  </Wrapper>
);

export default App;
