function courseComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      return [...state, action.comment];
    default:
      return state;
  }
}

function commentReducer(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: courseComments(state[action.postId], action)
    }
  }
  return state;
}

export default commentReducer;
