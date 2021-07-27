import React from 'react';
import Redux, {createStore, combineReducers} from 'redux';

/*const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

// Global count variable:
let count =0;

// Change code below this line
function fn() 
{
	count+= 1
}
store.subscribe(fn)
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);*/
/////////////////////

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';


const authReducer = (state = {authenticated: false}, action) => {
  return {
    LOGOUT: {
      authenticated: false
    },
    LOGIN: {
      authenticated: true
    }
  }[action.type] || state
};


const ADD_NOTE = 'ADD_NOTE'

function addNoteText(note) {
	return {
	 type: ADD_NOTE, text: note
	}
}
const addNoteTextReducer = (state = 'initial state', action) => {
	return { ADD_NOTE: action.text }[action.type] || state
}


const rootReducer = combineReducers({
  count: counterReducer,
  auth: authReducer,
  addNote: addNoteTextReducer,
}) // Define the root reducer here


const store = createStore(rootReducer);

console.log(store.getState().addNote);
store.dispatch(addNoteText('Hello!'));
console.log(store.getState().addNote);



/////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////
const Redux1 = () => {
	return (
		 <div>
		 	helo
		 </div>
		)
}

export default Redux1