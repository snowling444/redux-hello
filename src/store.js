import {createStore} from 'redux';

let comments=['vsgx','dsdgss']

function commentReducer(state=[],action){
  return state
}

let store = createStore(commentReducer,comments)

export default store;
