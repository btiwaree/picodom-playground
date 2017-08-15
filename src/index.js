/** @jsx h */

import { h, patch } from 'picodom';

import './style.css';
import store from './store';

const render = domPatcher(view, store);

store.subscribe(render);

render();

function domPatcher(view, store) {
  let element, oldNode;
  return () => {
    element = patch(oldNode, (oldNode = view(store)), element)
  }
}

function view(store) {
  return (
    <InputView
      state={store.getState()}
      onSetName = {(payload) => {
        store.dispatch({
          type: 'SET_NAME',
          payload,
        })
      }}
      componentDidMount = {() => {
        const name = localStorage.getItem('name');
        /*
        FIX ME!!!

        store.dispatch({
          type: 'SET_NAME',
          payload: name,
        });
        */
      }}
      componentDidUpdate = {() => {
        const { name } = store.getState();
        localStorage.setItem('name', name);
      }}
    />
  )
}

function InputView({ state, onSetName, componentDidMount, componentDidUpdate }) {
  const { name } = state;
    return (
      <div>
          <h1 onupdate={componentDidUpdate}>{name.trim() === '' ? "What's up?" : name}</h1>
          <input
            autofocus
            type="text"
            value={name}
            oninput={e => onSetName(e.target.value)}
          />      
      </div>
    )
};
