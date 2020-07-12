const currencyNames = {
    d:'dollar',
    r:'rupee'
}


function Millioniar(props){
    if(props.networth> 100000){
        return <p className="millionaire">Yes You are Millioniar.</p>
    }
    return<p className="not-millionaire">Not an Millioniar.</p>
}


class NetworthInput extends React.Component{

    constructor(props){
        super(props);

        this.state={
            networth : 0
        }
    }


    handleChange=(e)=>{
        const value = parseFloat(e.target.value) || 0;

        this.setState(function(prevState){
            return{
                networth : value
            }
        })
    }

    render(){

        const currency = this.props.currency;
        return(<div>
            <fieldset className="networth">
                <legend>Enter net worth in {currencyNames[currency]}:</legend>
                <input 
                        className="input"
                        defaultValue={this.state.networth} 
                        onChange={this.handleChange}
                />
                <Millioniar networth={this.state.networth}/>
            </fieldset>
        </div>);
    }


}


class MillioniarCalculator extends React.Component{

    render(){
        return(
            <div className="contents">
                <NetworthInput currency="d" />
            </div>
        );
    }

}


ReactDOM.render(<MillioniarCalculator />,document.getElementById("outer"));


