class Visibility extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggleStatus: false };
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  toggleStatus() {
    this.setState((prevState) => {
      return { toggleStatus: !prevState.toggleStatus }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleStatus}>{ this.state.toggleStatus ? 'Show Details' : 'Hide Details'}</button>
        {this.state.toggleStatus && <p>Hello! This is the secret message!</p>}
      </div>
    )
  }
};

ReactDOM.render(<Visibility />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let toggleStatus = false;

// const toggleButton = () => {
//   toggleStatus = (toggleStatus) ? false : true;
//   // toggleStatus = !toggleStatus; <-- this should be used!
//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleButton}>{toggleStatus ? 'Hide Details' : 'Show Details'}</button>
//       {toggleStatus && <p>Hello! this is the secret message!</p>}
//     </div>
//   )

//   ReactDOM.render(template, appRoot);
// }

// render();
