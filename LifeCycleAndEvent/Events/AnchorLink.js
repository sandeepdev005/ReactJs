// to prevent default event

class AnchorLink extends React.Component{

    state={
        linkCounter : 0
    }

    handleClick =(e) => {
        e.preventDefault();
        console.log(e.type+"" + this.state.linkCounter);
        console.log("navitve Event type : "+ e.nativeEvent)
        this.setState(function(prevState,props){
            return{
                linkCounter : prevState.linkCounter + 1
            }
        });
    };


    render(){
       return(<div>
           <div className="box">
                <a href="http://www.google.com" target="_blank" onClick={this.handleClick}>Click Me</a>
           </div>
       </div>);
    };
}


ReactDOM.render(<AnchorLink />, document.getElementById('anchorlink'));