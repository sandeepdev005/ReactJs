
class Student extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
         <div className="student">
             <div>StudentID : {this.props.id}</div>
             <div>Name : {this.props.studentName}</div>
             <div>Enrolled : {this.props.enroll?"true":"false"}</div>
             <div>Campus : {this.props.campus}</div>
             <div>Major : {this.props.major}</div>
             <div>Courses : {this.props.courses}</div>
        </div>);
    }

}


//validation

Student.propTypes ={
    id : PropTypes.number,
    studentName : PropTypes.string,
    enroll : PropTypes.bool,
    major : PropTypes.string.isRequired,
    campus : PropTypes.oneOf(['North','South']),

    // this is a custom property check
    courses(prop, propName){
        var propValue = prop[propName];
        if(propValue == 'Statistics' || propValue == 'Philosophy'){
            throw Error('Sorry, this cource is not offered currently');
        }
    }
}


Student.defaultprops={
    id:Math.floor(Math.random() * 1000000),
    enroll: true
}


ReactDOM.render(<Student studentName="Sandeep"  campus="North"  major="Computer Science"  courses={"Statistics"}/>, document.getElementById('validatingProps'));