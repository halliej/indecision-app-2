/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-console */

console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of the computer!',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    // eslint-disable-next-line no-use-before-define
    render();
  }
};

const onRemoveAll = () => {
  app.options.length = 0;
  // eslint-disable-next-line no-use-before-define
  render();
};

const onMakeDecision = () => {
  // const randomNum = Math.floor(Math.random() * app.options.length);
  // const option = app.options[randomNum];
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          // eslint-disable-next-line arrow-parens
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  // eslint-disable-next-line no-undef
  ReactDOM.render(template, appRoot);
};

render();
