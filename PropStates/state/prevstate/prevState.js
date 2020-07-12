class Counter extends React.Component{

    state={
        counter:0
    }

    incrementCounter=()=>{
        this.setState(function(prevState){
            return{
                counter: prevState.counter + this.props.increment
            }
        })
    }

    render(){

        setTimeout(this.incrementCounter, 1500);
        return(
            <div className="circle">
                {this.state.counter}
            </div>
        );
    }

}

ReactDOM.render(<Counter increment={1}/>, document.getElementById('outer'));