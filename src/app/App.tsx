import React, { FC } from 'react';
import styled from 'styled-components';
import NewOrderButton from '../features/order/NewOrderButton';

const Wrapper = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 15% auto 0;
`;

const App: FC = () => (
  <Wrapper>
    <NewOrderButton />
  </Wrapper>
);

export default App;
