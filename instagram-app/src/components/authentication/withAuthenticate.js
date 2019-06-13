import React from 'react';
import './src/App.js'
const withAuthenticate = App =>
class extends React.Component {
  render() {
    return <App />;
  }
};
export default withAuthenticate;