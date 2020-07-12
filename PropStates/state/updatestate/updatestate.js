
class DetailsBox extends React.Component{

    state={
        name:'sandeep',
        color:'green',
        backgroundColor:'yellow',
        subject:'Science'
    }


    pickRandomColor= () =>{
        var colors = [
            'blue',
            'magenta',
            'lavender',
            'violet',
            'red'
        ];

        var index = Math.floor(Math.random() * colors.length);

        this.setState({
            color : colors[index]
        });
    }

    pickRandomBackgroundColor =() =>{
        var colors = [
            'lime',
            'skyblue',
            'orange',
            'yellow',
            'purple'
        ];

        var index = Math.floor(Math.random() * colors.length);

        this.setState({
            backgroundColor : colors[index]
        });
    }


    pickRandomName=()=>{
        var names = [
            'Alice',
            'Bob',
            'Carl',
            'Dora',
            'Elisa'
        ];

        var index = Math.floor(Math.random() * names.length);

        this.setState({
            name : names[index]
        });

    }

    pickRandomSubject =() =>{
        var subjects = [
            'Math',
            'Science',
            'Biochemistry',
            'Physics',
            'History',
            'Psychology'
        ];


        var index = Math.floor(Math.random() * subjects.length);

        this.setState({
            subject : subjects[index]
        });
    }


    render(){

        const customStyle ={
            color : this.state.color,
            backgroundColor : this.state.backgroundColor
        }

        return(
            <div>
                <div className="details" style={customStyle}>
                    Name : {this.state.name} <br />
                    Subject : {this.state.subject}
                </div>
                <button className="button" onClick={this.pickRandomName}>Change Name</button>
                <button className="button" onClick={this.pickRandomSubject}>Change Subject</button><br/>
                <button className="button" onClick={this.pickRandomColor}>Change Color</button>
                <button className="button" onClick={this.pickRandomBackgroundColor}>Change backgroundColor</button>
            </div>
        );
    }

}


ReactDOM.render(<DetailsBox />, document.getElementById('outer'));
