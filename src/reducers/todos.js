/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import todo from './todo';

const initialState = [];

module.exports = function(initialState=[], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        todo(undefined, action)
      ];
    case "TOGGLE_TODO":
      return state.map(t =>
        todo(t, action));
    default:
      return state;
  }
};
