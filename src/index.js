import { h, patch } from 'picodom';
import './style.css';

let element, oldNode;
/** @jsx h */

function render(newNode) {
	return (element = patch(
    	document.body,
    	element,
    	oldNode,
    	(oldNode = newNode)
  	));
}

const greeting = 'Hello.';

function inputView(state) {
  	return (
    	<div>
      		<h1>{state.trim() === '' ? "What's up?" : state}</h1>
	      	<input
		        autofocus
		        type="text"
		        value={state}
		        oninput={e => render(inputView(e.target.value))}
	      	/>      
    	</div>
  	)
};

render(inputView(greeting));
