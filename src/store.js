import {createStore} from 'redux';

let comments=['vsgx','dsdgss','erwrt','dgdgfd']

function commentReducer(state=[],action){
  switch(action.type){
    case 'ADD_COMMENT':
       return [...state, action.comment]
    default:
      return state
  }
}

let store = createStore(commentReducer,comments)

export default store;
