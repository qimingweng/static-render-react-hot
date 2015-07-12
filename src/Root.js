import React from 'react';
import HelloWorld from './components/HelloWorld.jsx';

export default class Root extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Title</title>
        </head>
        <body>
          <HelloWorld/>
          <script src="/hot.js"/>
        </body>
      </html>
    )
  }
}
