import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../store';

class PostBody extends Component {
  constructor(){
    super();
  }
  handleClick(id){
    store.dispatch({type: 'INCREMENT_LIKES', index: id - 1})
  }
  render(){
    return(
      <div className="post-body">
        <div className="likes-num" onClick={this.handleClick.bind(this,this.props.id)}>
          {this.props.posts[this.props.id-1].likes}
        </div>
        <div className="comment-num">
          {this.props.comments[this.props.id].length}
        </div>
        {this.props.id}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments:state.comments,
  posts:state.posts
});
export default connect(mapStateToProps)(PostBody);
