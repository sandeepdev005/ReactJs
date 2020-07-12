class Warning extends React.Component{
    render(){
        return(
        <div className="comment">
            <span className="photo">
                <img src="images/warning.png"/>
            </span>
            <span className="message">
                Something wasn't right, you might need to debug 
            </span>
        </div>);
    }
}

class Ok extends React.Component{
    render(){
        return(
        <div className="comment">
            <span className="photo">
                <img src="images/ok.png"/>
            </span>
            <span className="message">
                     Everything looks good, please carry on!
            </span>
        </div>);
    }
}

class Display extends React.Component{

    render(){
        return(<div>
            <h1>Hello Boss</h1>
            {(this.props.warn && <Warning />) || (<Ok/>)  }
        </div>);
    }
}

ReactDOM.render(<Display warn={true}/>,document.getElementById("inLine"));
// ReactDOM.render(<Display warn={false}/>,document.getElementById("inLine"));