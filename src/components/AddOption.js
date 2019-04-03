/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default class AddOption extends React.Component {
  // new class properties method eleminate need for constructor
  state = {
    error: undefined
  };
  // not need when using babel-plugin-transform-class-properties
  // constructor(props) {
  //   super(props);
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // this.state = {
  //   error: undefined
  // };
  // }

  // onFormSubmit(e) {
  onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    if (!error) {
      e.target.elements.option.value = '';
    }
    this.setState(() => ({ error }));
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.onFormSubmit}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
