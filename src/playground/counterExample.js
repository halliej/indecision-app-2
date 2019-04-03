/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-plusplus */

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd1 = this.handleAdd1.bind(this);
    this.handleMinus1 = this.handleMinus1.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const count = parseInt(localStorage.getItem('count'), 10);
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAdd1() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinus1() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAdd1}>+1</button>
        <button onClick={this.handleMinus1}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   count: 0
// };

// ReactDOM.render(<Counter count={5} />, document.getElementById('app'));
ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// const add1 = () => {
//   count++;
//   // eslint-disable-next-line no-use-before-define
//   renderCounterApp();
// };

// const minus1 = () => {
//   count--;
//   // eslint-disable-next-line no-use-before-define
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   // eslint-disable-next-line no-use-before-define
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const template2 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={add1}>+1</button>
//       <button onClick={minus1}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   // eslint-disable-next-line no-undef
//   ReactDOM.render(template2, appRoot);
// };

// renderCounterApp();
