export default function (state = {counter: 0, clicked: 0}, action) {
  switch(action.type) {
    case "INCREMENT":
      return {counter: state.counter + 1, clicked: state.clicked + 1};

    case "DECREMENT":
      return {counter: state.counter - 1, clicked: state.clicked + 1};

    default:
      return state;
  }
}
