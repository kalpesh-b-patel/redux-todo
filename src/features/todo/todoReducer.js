import { ADD_TODO, DELETE_TODO } from './actionCreators';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const tmp = [...state.todos];
      tmp.push({
        id: tmp.length + 1,
        ...action.payload,
      });
      return {
        ...state,
        todos: tmp,
      };
    }
    case DELETE_TODO: {
      const tmp = [...state.todos];
      return {
        ...state,
        todos: tmp.filter((todo) => todo.id !== action.payload),
      };
    }
    default:
      return { ...state };
  }
};

export default todoReducer;
