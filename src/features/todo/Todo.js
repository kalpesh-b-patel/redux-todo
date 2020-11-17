import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from './actionCreators';

import './Todo.css';

const Todo = (props) => {
  const [todo, setTodo] = useState('');
  const [priority, setPriority] = useState('Medium');
  const radio = ['Low', 'Medium', 'High'];

  return (
    <div className='todos'>
      <div className='todos__input'>
        <input
          type='text'
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
      </div>

      <div className='todos__priority'>
        {radio.map((option) => {
          return (
            <div>
              <input
                id={option}
                type='radio'
                name='priority'
                checked={option === priority}
                onChange={() => setPriority(option)}
              />
              <label for={option}>{option}</label>
            </div>
          );
        })}
      </div>

      <div className='todos__submit'>
        <button
          type='button'
          onClick={() =>
            props.addTodo({
              todo,
              priority,
            })
          }
        >
          Add Todo
        </button>
      </div>

      <div className='todos__list'>
        <ul>
          {props.todos.map((todo) => {
            return (
              <div className='todos__list--item'>
                <li key={todo.id}>{todo.todo}</li>
                <button type='button' onClick={() => props.deleteTodo(todo.id)}>
                  Done
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};

const mapDispatchToProps = { addTodo, deleteTodo };

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
