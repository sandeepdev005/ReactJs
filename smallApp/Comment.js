import React from 'react';
import message from './message.png';
import trash from './trash.png';

class Comment extends React.Component{

    deleteComment =() =>{
        this.props.deleteComment(this.props.index);
    }

    render(){
        return(
            <table className="comment">
                <tbody>
                    <tr>
                        <td className="photo">
                            <img alt="message" src={message}/>
                        </td>
                        <td className="message"> 
                           {this.props.message}
                        </td>
                        <td className="delete" onClick={this.deleteComment}>
                            <img alt="Trash" src={trash} />
                        </td>
                    </tr>
                </tbody>

            </table>
        );
    }

}

export default Comment;