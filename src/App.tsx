import React from 'react';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
  description?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  )
};

App.defaultProps = {
  message: 'Hello, defaultProps',
  description: 'this is App component.'
};

export default App;
