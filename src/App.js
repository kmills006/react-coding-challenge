import React, { Component } from 'react';
import { render } from 'react-dom';
import generateButtonIds from './utils/generate-button-ids';
import Button from './components/Button';
import ButtonContent from './components/ButtonContent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonIds: generateButtonIds(),
      activeButtonId: '',
      activeBgColor: '#FFF',
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(activeButtonId, activeBgColor) {
    this.setState({ activeButtonId, activeBgColor });
  }

  renderButtonContent() {
    const { activeButtonId } = this.state;

    return <ButtonContent content={activeButtonId} />;
  }

  renderButtons() {
    const { buttonIds } = this.state;

    return buttonIds.map((id, index) => (
      <Button
        handleOnClick={this.handleButtonClick}
        key={index}
        value={id}
      />
    ));
  }

  render() {
    const { activeBgColor } = this.state;

    const buttonContent = activeBgColor !== '#FFF' ? this.renderButtonContent() : null;

    return (
      <div className="app-wrapper" style={{ background: activeBgColor }}>
        <h1>Poetic React Coding Challenge</h1>

        <div className="button-group">
          {this.renderButtons()}
        </div>

        {buttonContent}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
