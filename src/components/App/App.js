import 'components/Typography/styles/index.scss';
import 'components/App/styles/index.scss';

import React from 'react';
import Button from 'components/Button/Button';
import Example from 'components/Example/Example';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import icomoon from 'assets/icons/icomoon.svg';

function App() {
  return (
    <div className="App Typography">
      <div className="App__Header">
        <div className="App__HeaderNavigation">
          <Button href="https://reactjs.org/" className="App__HeaderNavigationButton">
            <SvgIcon src={`${icomoon}#icon-react`} className="SvgIcon--size_m Button__Icon Button__Icon--leftAligned App__HeaderNavigationButtonIcon" />
            <div className="Button__Caption App__HeaderNavigationButtonCaption">
              View react docs
            </div>
          </Button>
          <h1 className="Typography Typography--headline1 App__HeaderNavigationHeadline">
            React demo application
          </h1>
          <Button href="https://github.com/SeregaMatin/react-progress-bar-demo" className="App__HeaderNavigationButton">
            <div className="Button__Caption App__HeaderNavigationButtonCaption">
              View source on GitHub
            </div>
            <SvgIcon src={`${icomoon}#icon-github`} className="SvgIcon--size_m Button__Icon Button__Icon--rightAligned App__HeaderNavigationButtonIcon" />
          </Button>
        </div>
      </div>
      <div className="App__Content">
        <Example />
      </div>
    </div>
  );
}

export default App;
