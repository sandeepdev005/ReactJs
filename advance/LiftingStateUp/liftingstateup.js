const currenyNames ={
    d : 'dollar',
    r :'rupees'
}


function toDollar(rupee){
  return rupee * 0.014;
}

function toRupee(dollar){
    return dollar * 70.95;
}

function tryConvert(money,convert){

    const input = parseFloat(money);

    if (Number.isNaN(input)) {
        return '';
      }

    const output = convert(input);
    const rounded = Math.round(output * 100) / 100;

    return rounded.toString();

}

function Millioniar(props){
    if(props.dollar>100000){
     return <p>Yes You are a Millioniar</p>   
    }
    return <p>No You are not a Millioniar</p>
}

class NetworthInput extends React.Component{

    handleChange =(e) =>{
        this.props.handleNetworthChange(e.target.value)
    }

    render(){
        return(
            <fieldset className="networth">
                <legend>Enter the Networth currency in {currenyNames[this.props.currency]}</legend>
                <input 
                    className="input"
                    onChange={this.handleChange}
                    defaultValue={this.props.networth}
                />
            </fieldset>
        );
    }

}


class MillioniarCalculator extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            currency:'d',
            networth :''
        }
    }

    handleDollarChange=(networth)=>{
        this.setState({currency:'d',networth:networth})
    }

    handleRupeeChange=(networth) =>{
        this.setState({currency:'r',networth:networth})
    }


    render(){

        const networth = this.state.networth;
        const currency = this.state.currency;

        const dollar = (currency === 'd') ? tryConvert(networth,toDollar): networth;
        const rupee = (currency === 'r') ? tryConvert(networth,toRupee): networth;

        return(
            <div>

                <NetworthInput 
                 currency={'d'}
                 handleNetworthChange={this.handleDollarChange}
                 networth={dollar}
                />

                <NetworthInput 
                 currency={'r'}
                 handleNetworthChange={this.handleRupeeChange}
                 networth={rupee}
                />
                <Millioniar dollar={parseFloat(dollar)}/>
            </div>
        );
    }


}


ReactDOM.render(<MillioniarCalculator />, document.getElementById('outer'));
