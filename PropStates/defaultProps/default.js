class Student extends React.Component{
    render(){
        return(
         <div>
        <div> Id : {this.props.id}</div>
        <div> StudentName : {this.props.name}</div>
        <div> Enrolled : {this.props.enroll ? "true": "false"}</div>
        <div> major : {this.props.major}</div>
        </div>);
    }
}



Student.defaultProps={
    id : Math.floor(Math.random() * 1000000),
    enroll: true
}

ReactDOM.render(<Student />, document.getElementById('default'));