import React, { Component } from 'react';
import { render } from 'react-dom';
import generateContent from './utils/generate-content';
import findWithAttr from './utils/find-with-attr';
import ActiveContentBlock from './components/ActiveContentBlock';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generatedContent: generateContent(),
      activeContent: {},
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(evt) {
    const { generatedContent } = this.state;
    const triggerValue = evt.target.value;

    const activeContentIndex = findWithAttr(
      generatedContent,
      'triggerValue',
      triggerValue,
    );

    this.setState({ activeContent: generatedContent[activeContentIndex] });
  }

  renderActiveContentBlock() {
    const { activeContent } = this.state;

    if (!Object.keys(activeContent).length) return null;

    return <ActiveContentBlock content={activeContent.content} />;
  }

  renderButtons() {
    const { generatedContent } = this.state;

    return generatedContent.map((content, index) => (
      <Button
        handleOnClick={this.handleButtonClick}
        key={index}
        value={content.triggerValue}
      />
    ));
  }

  render() {
    const { activeContent } = this.state;

    return (
      <div
        className="app-wrapper"
        style={{ background: activeContent.bgColor || '#FFF' }}
      >
        <h1>Poetic React Coding Challenge</h1>

        <div className="button-group">
          {this.renderButtons()}
        </div>

        {this.renderActiveContentBlock()}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
