
class Employee extends React.Component {

    constructor(props){
        super(props);
        console.log("1. constructor " + props.initialNames);

        this.state = {
            names : props.initialNames,
            mounted : false
        };


        window.addEventListener('mountedEvent',function(){

            console.log("Invoked when compoenet is mounted.");
            this.setState((prevState) =>{
                var names = prevState.names.concat();
                names.push("Deen");
                names.push("Log");
                names.push("TAN");
                names.push("SIN");
                names.push("COS");

                return{
                    names: names
                };
            });
            this.setState({mounted : true});
        }.bind(this));


    }


    render(){
        console.log("2. Render");
        var index = 0;
        return(
        <div>
            <div>
                {
                    this.state.names.map((name) => 
                        <div className="employee" key = {index++}>
                            {name}
                        </div>
                    )
                }
            </div>
            <div>
                {this.state.mounted ? "Component mounted" : "Componenet not yet mounted"}
            </div>
        </div>
        );
    }

    componentDidMount(){
        console.log("3 componentDidMount");
        setTimeout(function(){
            window.dispatchEvent(new Event("mountedEvent"))
        },5000);
    }
}

ReactDOM.render(<Employee initialNames={['Den','John']}/>, document.getElementById('outer'));