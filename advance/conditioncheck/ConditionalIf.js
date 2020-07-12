function Circle(props){

    const circleStyle =  {
        backgroundColor : props.color
    }

    return <div className="circle" style={circleStyle}>

    </div>
}


class Toggle extends React.Component{
    state={
        go: true
    }


    toggle=() => {
        this.setState(function(prevState){

            return{
                go: !prevState.go
            }
            
        });
    }

    render(){

        if(this.state.go){
            return(<div>
                <Circle color="green"/>
                <button className="button" onClick={this.toggle}>Go</button>
            </div>)
        }

        return(<div>
            <Circle color="red"/>
            <button className="button" onClick={this.toggle}>Stop</button>
        </div>)

    }
}

ReactDOM.render(<Toggle />,document.getElementById("react-conditional-if"));