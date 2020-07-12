import React from 'react';
import CommentList from './CommentList';
import CommentBox from './CommentBox';

class App extends React.Component{

  state = {
    messages : [
      'React seems like a really cool library',
      'I love to use components in React',
      'Makes development so east',
      'It was hard to follow but now I love it'
    ]
  }

  addComment = (message) =>{
    this.setState(function(prevState){
      var messages = prevState.messages.concat();
      messages.push(message);
      return{
        messages : messages
      }
    });
  }

  deleteComment =(index) =>{
    this.setState(function(prevState){
      var messages = prevState.messages;
      //index is the position and 1 is number of items to be delete from postion
      messages.splice(index,1);
      return{
        messages : messages
      }
    })
  }

  render(){
    return(
     <div>
        <CommentBox addComment={this.addComment} />
        <CommentList messages = {this.state.messages}
                     deleteComment={this.deleteComment}
        />
    </div>);
  }

}

export default App;
