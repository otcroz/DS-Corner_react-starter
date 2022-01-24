import { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixNumber: 0,
  };

  render() {
    const { number, fixNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });

            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
