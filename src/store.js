import {createStore} from 'redux';
import rootReducer from './reducers';

const comments = {
  1: ['fsfsfsf', 'dsf'],
  2: ['rdfs', 'sadfs']
}

const posts =[
  {id:'1',title:'Snow'},
  {id:'2',title:'Milk'}
]

const defaultState = {
  comments,
  posts
}

let store = createStore(rootReducer,defaultState)

export default store;
