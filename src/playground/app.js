// Run with: babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-else-return */
/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    // eslint-disable-next-line no-empty
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // handleDeleteOptions() {
  //   this.setState(() => {
  //     return {
  //       options: []
  //     };
  //   });
  // }
  // same as above
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  // eslint-disable-next-line consistent-return
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid option!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    // this.setState((prevState) => {
    // return {
    //   options: prevState.options.concat(option)
    // };
    // });
    // same as above
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer!';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

// IndecisionApp.defaultProps = {
//   options: []
// };

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'some default'
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add options</p>}
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {this.props.options.map((option) => <Option key={option} optionText={option} />)}
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        // eslint-disable-next-line no-unused-vars
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }

  onFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    if (!error) {
      e.target.elements.option.value = '';
    }
    // this.setState(() => {
    //   return { error };
    // });
    // same as above
    this.setState(() => ({ error }));
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// Stateless functional component
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };
// ReactDOM.render(<User name="Hal" age={63} />, document.getElementById('app'));

// eslint-disable-next-line max-len
// ReactDOM.render(<IndecisionApp options={['Option 1', 'Option 2', 'Option 3']} />, document.getElementById('app'));
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
