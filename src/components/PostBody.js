import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../store';
import { Link } from 'react-router';

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
        <div className='title'>
          <h1>{this.props.posts[this.props.id-1].title}</h1>
        </div>
        <div className="likes-num" onClick={this.handleClick.bind(this,this.props.id)}>
          {this.props.posts[this.props.id-1].likes}喜欢
        </div>
        <div className="comment-num">
          {this.props.comments[this.props.id].length}评论
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments:state.comments,
  posts:state.posts
});
export default connect(mapStateToProps)(PostBody);
