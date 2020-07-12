function Circle(props){
    const circleStyle = {
        backgroundColor: props.color
    }
    return <div className="circle" style={circleStyle}> </div>
    
}

function PurpleCircle(props){
    return <Circle color="purple"></Circle>
}

function GreenCircle(props){
    return <Circle color="green" />
}

function RedCircle(props){
    return <Circle color="red" />
}

function BlueCircle(props){
    return <Circle color="blue"/>
}

function YellowCircle(props){
    return <Circle color="yellow" />
}

function RandomCircle(props){
    const Circles=[
       PurpleCircle,
       GreenCircle,
       RedCircle,
       BlueCircle,
       YellowCircle
    ];

    const SomeCircle = Circles[props.index];

    return <SomeCircle />;
}


ReactDOM.render(<PurpleCircle />,document.getElementById('PurpleCircle'));
ReactDOM.render(<GreenCircle />,document.getElementById('GreenCircle'));
ReactDOM.render(<RedCircle />,document.getElementById('RedCircle'));
ReactDOM.render(<BlueCircle />,document.getElementById('BlueCircle'));
ReactDOM.render(<YellowCircle />,document.getElementById('YellowCircle'));
ReactDOM.render(<RandomCircle index={Math.floor(Math.random() * 5)} />,document.getElementById('RandomCircle'));


