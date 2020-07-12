class CustomDialog extends React.Component {


    render() {

        var color = "green";

        if (this.props.dialogeType === "warning") {
            color = "orange";
        } else if (this.props.dialogeType === "error") {
            color = "red";
        }

        return (
            <div className={'bt bt-'+color+' bg-'+color}>

                <h1 className="greeting-title">{this.props.title}</h1>
                <div className="greeting-message">{this.props.message}</div>

            </div>);
    }
}

class OkDialouge extends React.Component{
    render(){
        return(<div>
            <CustomDialog dialogeType="ok" title="Title" message="Document sent successfully"/>
        </div>);
    }
}

class WarningDialouge extends React.Component{
    render(){
        return(<div>
            <CustomDialog  dialogeType="error" title="Warning" message="Data uploaded in wrong formate please check" />
        </div>);
    }
}


class ErrorDialouge extends React.Component{
    render(){
        return(<div>
            <CustomDialog  dialogeType="error" title="Warning" message="Server error" />
        </div>);
    }
}

ReactDOM.render(<ErrorDialouge  />, document.getElementById("outer"));
// ReactDOM.render(<WarningDialouge  />, document.getElementById("outer"));
// ReactDOM.render(<OkDialouge  />, document.getElementById("outer"));