class SyntheticEvent extends React.Component {

    state = {
        counter: 0
    }

    incrementCounter = (e) => {

        console.log(e.type + "" + this.state.counter);
        var increment = 1;
        if (e.shiftKey) {
            increment = 10;
        }

        if (e.altKey) {
            increment = 100;
        }
        this.setState(function (prevState, props) {
            return {
                counter: prevState.counter + increment
                }
        });

    }
    decrementCounter = (e) => {
            console.log(e.type + " " + this.state.counter);
            var decrement = 1;
            if(e.shiftKey){
                decrement = 10
            }

            if(e.altKey){
                decrement = 100
            }

            this.setState(function(prevState,props){
                return{
                    counter : prevState.counter - decrement
                }
            });
    }


    render(){
        return(
            <div>
                <div className="box">
                    {this.state.counter}
                </div>
                <button className="button" onClick={this.incrementCounter} >+ </button>
                <button className="button" onClick ={this.decrementCounter}>-</button> 
            </div>
        );
    }
}

ReactDOM.render(<SyntheticEvent />, document.getElementById("syntheticEvent"));