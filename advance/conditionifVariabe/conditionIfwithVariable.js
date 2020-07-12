function Circle(props){

    const circleStyle ={
        backgroundColor : props.color
    }
    return (<div className="circle" style={circleStyle}></div>);
}

function GreenCircle(){
        return <Circle color="green"/>
}

function RedCircle(){
    return <Circle color="red"/>
}

function GoButton(props){
 return <button className="button" onClick={props.toggle}>GO</button>
}

function StopButtton(props){
    return <button className="button" onClick={props.toggle}>Stop</button>
}


class Toggle extends React.Component{

    state ={
        go:true
    }

    toggle =()=>{
        this.setState(function(prevState){
            return{
                go: !prevState.go
            }
        })
    }

    render(){

        let circle, button;

        if(this.state.go){
            circle = <GreenCircle/>
            button = <GoButton toggle={this.toggle}/>
        }else{
            circle = <RedCircle/>
            button = <StopButtton toggle={this.toggle}/>
        }


        return(
            <div>
                {circle}
                {button}
            </div>
        );

    }
}

ReactDOM.render(<Toggle />,document.getElementById("react-conditional-if-variable"));

