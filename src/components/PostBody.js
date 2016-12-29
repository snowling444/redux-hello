import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../store';
import Like from './Like';

class PostBody extends Component {
  constructor(){
    super();
    this.state={
      like:3
    }
  }
  handleClick(){
    this.setState({like:this.state.like + 1})
  }
  render(){
    return(
      <div className="post-body">
        <div className="like-num" onClick={this.handleClick.bind(this)}>
          <Like like={this.state.like}/>
        </div>
        <div className="comment-num">
          {this.props.comments.length}
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
