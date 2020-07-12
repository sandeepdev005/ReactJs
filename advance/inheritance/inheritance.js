class Message extends React.Component{

    constructor(props){
        super(props);
        this.className = "border plain-message";
    }

    render(){
        return(
            <div className={this.className}>
                {this.props.message}
            </div>
        );
    }

}


class SucessMessage extends Message{
    constructor(props){
        super(props);
        this.className = this.className +" success-message"
    }

    render(){
        return(<div>
          {super.render()}
        </div>);
    }
}

class FailureMessage extends Message{
    constructor(props){
        super(props);
        this.className = this.className +" error-message";
    }

    render(){
        return(<div>
            {super.render()}
        </div>);
    }
}


class Dialoge extends React.Component{

    render(){
        return(<div>
            <Message message="This is a plain Text." />
            <SucessMessage message="This is a sucess Text."/>
            <FailureMessage message="This is a failure Text."/>
        </div>);
    }
}


ReactDOM.render(<Dialoge/>,document.getElementById("outer"));










