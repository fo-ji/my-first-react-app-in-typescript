import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
  description?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <Counter />
    </div>
  )
};

App.defaultProps = {
  message: 'Hello, defaultProps',
  description: 'this is App component.'
};

export default App;
