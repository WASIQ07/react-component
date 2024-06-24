import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import MyComponent from './components/MyComponent';

const WebMyComponent = reactToWebComponent(MyComponent, React, ReactDOM);
customElements.define('my-react-component', WebMyComponent);

// Optional: For standalone React app development
if (!window.singleSpaNavigate) {
  ReactDOM.render(<MyComponent />, document.getElementById('root'));
}
