class Company extends React.Component{
    render(){
        return(<div className="company">
                 <div>{this.props.companyName}</div>
                 <Employee {...this.props} tenure={"2"}/>
                 <Activites {...this.props}/>
              </div>);
    }
}

class Employee extends React.Component{
        render(){
            return(
            <div className="employee">
                <div>Name : {this.props.employeeName}</div>
                <div>Designation : {this.props.designation}</div>
                <div>Tenure : {this.props.tenure}</div>
            </div>);
        }
}

class Activites extends React.Component{
        render(){
            return(
            <div className="activites">
                <div>Committees {this.props.committe}</div>
                <div>Formus {this.props.forum}</div>
            </div>);
        }
}

ReactDOM.render(<Company 
                    companyName={"SkillSoft"}
                    employeeName={"EmployeeName"}
                    designation={"Software engineer"}
                    committe ={"Research and Data Scientist"}
                    forum ={"Website designer and Mobile App developer and IOT Engineer"}
            />, document.getElementById('outer'));