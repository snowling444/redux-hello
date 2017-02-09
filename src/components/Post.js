import React from 'react';
import PostBody from './PostBody';
import CommentBox from './CommentBox';
import { Link } from 'react-router';


class Post extends React.Component {
  render(){
    return(
      <div>
        <Link to="/" className="header">Home</Link>
        <div className="top clearfix">
          <PostBody id={this.props.params.postId}/>
        </div>
        <div className="bottom clearfix">
          <CommentBox postId={this.props.params.postId}/>
        </div>
      </div>
    )
  }
}

export default Post;
