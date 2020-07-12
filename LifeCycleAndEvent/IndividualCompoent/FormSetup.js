class HotelBookingForm extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            nameValue:'',
            emailValue:'',
            phoneNumber:'',
            hotelName:'Siva'
        }


        this.error={
            name:true,
            email: true,
            phoneNumber: true
        }
    }


    validateName=(name)=>{
        console.log("Name in validation");
        if(name.length > 5){
            return true;
        }else return false;

    }

    validateEmail=(email) =>{
        if (/.+@.+\..+/.test(email)) {
            return true;
        }else return false;
    }

    validatePhoneNumber=(phoneNumber)=>{
        if(phoneNumber.length ==10){
            return true;
        }else return false;
    }

    handleTextChanges =(event) =>{
        
        const name = event.target.name;
        var value = event.target.value;
        if(name == 'nameValue'){
            value =event.target.value.toUpperCase();
        }
        this.setState({[name] : value});
    }


    handleSubmit=(event) =>{

        event.preventDefault();
        alert("Do you want to select hotel :"+ this.state.hotelName);

        console.log("Name of the Person : ", this.state.nameValue);
        console.log("Email of the Person: ", this.state.emailValue);
        console.log("Your Phone Number is :", this.state.phoneNumber);
        console.log("Hotel You have been selected", this.state.hotelName);

        this.setState({
            nameValue:'',
            emailValue:'',
            phoneNumber:0,
            hotelName:'Siva'
        });
        

    }

    render(){
        return(
         <form className="contents" onSubmit={this.handleSubmit}>
             <TextInput
                label="Name :"
                name= "nameValue"
                value={this.state.nameValue}
                validate={this.validateName}
                handleInputChange={this.handleTextChanges}
             />

            <TextInput
                label="Email :"
                name= "emailValue"
                value={this.state.emailValue}
                validate={this.validateEmail}
                handleInputChange={this.handleTextChanges}
             />

            <NumberInput
                label="Number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                handleInputChange ={this.handleTextChanges}
            />

            <SelectInput
                label="HotelsName"
                name="hotelName"    
                value={this.state.hotelName}
                options={this.props.hotelNamesOptions}
                handleInputChange={this.handleTextChanges}        
            />

            <input className="button" type="submit" value="submit" />

        </form>);
    }
}



HotelBookingForm.defaultProps = {
    hotelNamesOptions: [
        'Fantastic Hotels',
        'Wonderful Hotels',
        'Comfortable Hotels',
        'Pretentious Hotels'
    ]
};




class TextInput extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            errorMessage:''
        }
    }


    handleTextChanges=(event)=>{

        var errorMessage ='';

        if(!this.props.validate(event.target.value)){
            errorMessage = "** Invalid";
        }

        this.props.handleInputChange(event);
        this.setState({errorMessage: errorMessage});
    }

    render(){
        return(
        <div>
                <div className="label">{this.props.label}</div>
                <input className="input" type="text" name={this.props.name} value={this.props.value} onChange={this.handleTextChanges} />
                 <ErrorMessage message={this.state.errorMessage}/>
        </div>);
    }
}

class NumberInput extends React.Component{
    handleTextChanges=(event)=>{
        this.props.handleInputChange(event);
    }

    render(){
        return(
        <div>
                <div className="label">{this.props.label}</div>
                <input className="input" type="number" name={this.props.name} value={this.props.value} onChange={this.handleTextChanges} />
        </div>);
    }
}


class SelectInput extends React.Component{

    handleTextChanges =(event) =>{
        this.props.handleInputChange(event);
    }

    render(){
        return(
        <div>
            <div className="label">{this.props.label}</div>
            <select  name={this.props.name} onChange={this.handleTextChanges}>
                {
                    this.props.options.map((option) => <option key={option} value={option}>{option}</option>)
                }
            </select>
        </div>);
    }
   
}

class ErrorMessage extends React.Component{

    render(){
        console.log("Error Message");
        return(
            <div>
                <span className="error">{this.props.message}</span>
            </div>
        );
    }

}


ReactDOM.render(<HotelBookingForm />, document.getElementById('outer'));