import React, { Component } from 'react';
import store from '../store';

class CommentBox extends Component {
  constructor(){
    super();
    this.state={
      comments:store.getState()
    }
  }
  handleSubmit(e){
    e.preventDefault();
    // let val = this.refs.val.value;
    // let comments =   this.state.comments;
    // comments.push(val);
    // this.setState({ comments });

    // this.setState({
    //   // comments:[...this.state.comments,val]
    //   comments:this.state.comments.concat(val)
    // })
    this.refs.commentForm.reset();
  }
  render(){
    let commentList = this.state.comments.map( (item,i) => (
      <li key={i}>{item}</li>
    ))
    return(
      <div className="comment-box">

        <form onSubmit={this.handleSubmit.bind(this)} className='comment-form' ref='commentForm'>
          <input type='text' ref='val' className='input'/>
          <input type='submit' value='评论' className='submit'/>
        </form>
        <ul>{commentList}</ul>
      </div>
    )
  }
}

export default CommentBox;
