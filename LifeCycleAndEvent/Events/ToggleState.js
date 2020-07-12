class ToggleState extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
            enable: true,
            message : "state is enabled"
        }

        this.showMessage = this.showMessage.bind(this);
    }


    handleClick =(e) =>{
        e.preventDefault();
        this.setState(state => ({
            enable : !state.enable
        }));
    }

    showMessage(){
        if(this.state.enable){
            alert("Are you sure do you want to disable");

            this.setState({
                message: 'state is disabled'
            });
        }else{
            alert("Are you sure do you want to enable");

            this.setState({
                message : 'state is enabled'
            });
        }
    }
 

   

    render(){
        return(<div>
            <div className="box">
                {this.state.message}
            </div>

            <button className="button"
                    onClick={(e) => {
                        this.handleClick(e);
                        this.showMessage();
                    }}>
                {this.state.enable ? 'Disable' : 'Enable'}
            </button>
        </div>);
    };
}

ReactDOM.render(<ToggleState/>, document.getElementById("toggle"));