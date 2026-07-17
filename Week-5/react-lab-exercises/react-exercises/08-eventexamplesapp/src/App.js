import React from 'react';
import Counter from './Components/Counter';
import WelcomeButton from './Components/WelcomeButton';
import ClickEvent from './Components/ClickEvent';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  return (
    <div>
      <h1>Event Examples App</h1>
      <Counter />
      <WelcomeButton />
      <ClickEvent />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
