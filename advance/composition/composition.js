class Message extends React.Component{


    render(){
        return(<div className={ this.className ="border plain-message" + this.props.cssName}>
            {this.props.message}
        </div>);
    }
}


class SucessMessage extends React.Component{

    render(){
        return(
            <Message  {...this.props} cssName=" success-message"  />
        );
    }

}

class FailMessage extends React.Component{

    render(){
        return(
            <Message  {...this.props} cssName=" error-message"  />
        );
    }
}


class Dialog extends React.Component{

    render(){
        return(
            <div>
                <Message message="This is a plain text"/>
                <SucessMessage message="This is a success Message"/>
                <FailMessage message="This is a Fail Message"/>
            </div>
        );
    }
}


ReactDOM.render(<Dialog />, document.getElementById("outer"));