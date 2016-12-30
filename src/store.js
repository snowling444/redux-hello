import {createStore} from 'redux';
import rootReducer from './reducers';

const comments = {
  1: ['fsfsfsf', 'dsf'],
  2: ['rdfs', 'sadfs','dsffsfss']
}

const posts =[
  {id:'1',title:'Snow',likes:5},
  {id:'2',title:'Milk',likes:8}
]

const defaultState = {
  comments,
  posts
}

let store = createStore(rootReducer,defaultState)

export default store;
