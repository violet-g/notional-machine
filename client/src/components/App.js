var React = require('react');

class App extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default App;
