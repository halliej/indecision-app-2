/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */


/* eslint-disable no-console */

console.log('App.js is running!');

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visible: false
    };
  }

  handleToggle() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>
          {(this.state.visible) ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visible && (
          <div>
            <p>Details, details</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
