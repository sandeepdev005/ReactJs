class CustomBorderBackground extends React.Component {
    render() {
        return (
            <div className={'bt bt-' + this.props.color + ' bg-' + this.props.color}>
                {this.props.children}
            </div>);
    }

}


class Greeting extends React.Component {
    render() {
        return (
            <div>
                <CustomBorderBackground color="green">
                    <h1 className="greeting-title">Good morning!</h1>
                    <i className="greeting-message">Have a great day..:-)</i>
                </CustomBorderBackground>
            </div>

        );
    }
}


class EmailForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            emailValue: ''
        }
    }


    handleEmailChange = (e) => {
        this.setState({emailValue: e.target.value});
    }


    handleSubmit =(e)=>{
        console.log('Email address submitted: ' + this.state.emailValue);

        this.setState({
            emailValue :""
        });

        e.preventDefault();
    }

    render(){
        return(
            <div>
                <CustomBorderBackground color={"red"}>
                    <form onSubmit = {this.handleSubmit}>
                    <div className="label">
                        Email :
                    </div>
                    <input className="input" type="text"
                           value={this.state.emailValue}
                           onChange={this.handleEmailChange} />
                    <input className="button" type="submit" value="Submit" />

                   
                    </form>
                    

                </CustomBorderBackground>
            </div>
        );
    }


}




ReactDOM.render(<EmailForm />,
    document.getElementById('react-composition-children'));
// ReactDOM.render(<Greeting />,
//     document.getElementById('react-composition-children'));