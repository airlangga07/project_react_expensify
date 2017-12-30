class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    const count = parseInt(localStorage.getItem('count'), 10);
    if (!isNan(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAddOne() {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    })
  }

  handleMinusOne() {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    })
  }

  handleReset() {
    this.setState(() => {
      return { count: 0 }
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter count={0} />, document.getElementById('app'));

// console.log("App.js is running!")

// const app = {
//   title: 'Indecision App',
//   subTitle: 'My First React App',
//   options: ['One', 'Two']
// }

// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subTitle && <p>{app.subTitle}</p>}
//     <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
//     <ol>
//       <li>Item One</li>
//       <li>Item Two</li>
//     </ol>
//   </div>
// );

// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
// } 

// const minusOne = () => {
//   count = (count !== 0) ? count - 1 : 0;
//   renderCounterApp();
// }

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();

