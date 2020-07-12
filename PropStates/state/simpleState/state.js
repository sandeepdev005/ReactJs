class Circle extends React.Component{

    constructor(props){
            super(props);

            this.state={
                color : 'green',
                backgroundColor :'pink'
            }
    }

    render(){

        const circleStyle ={
            color : this.state.color,
            backgroundColor : this.state.backgroundColor
        }

        return(
         <div className="circle" style={circleStyle}>
            This is a React Js Developemt. 
        </div>);
    }
}

ReactDOM.render(<Circle />, document.getElementById('outer'));