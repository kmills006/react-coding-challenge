import React from 'react';
import { render } from 'react-dom';

import Button from './components/Button';

const App = () => (
  <div>
    <h1>Poetic React Coding Challenge</h1>

    <div className="button-group">
      <Button />
    </div>
  </div>
);

render(<App />, document.getElementById('app'));
