/* eslint-disable no-console */
/* eslint-disable no-else-return */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  // new class properties method eleminate need for constructor
  state = {
    options: [],
    selectedOption: undefined
  };
  // not need when using babel-plugin-transform-class-properties
  // constructor(props) {
  //   super(props);
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.handlePick = this.handlePick.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
  //   this.state = {
  //     options: []
  //   };
  // }
  // handleDeleteOption(optionToRemove) {

  // eslint-disable-next-line react/sort-comp
  handleDeleteOption = (optionToRemove) => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  // handlePick() {
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  // handleAddOption(option) {
  // eslint-disable-next-line consistent-return
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid option!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  handleCloseModal = () => {
    this.setState(() => ({
      selectedOption: ''
    }));
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
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer!';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
