class HotelBookingForm extends React.Component{

    constructor(props){
        super(props);

        this.state={
            emailValue :'',
            nameValue:'',
            nameOfTheHotelValue:'SivaShankar',
            hotelLocationName:'',
        }
    }

    handleInputChange = (event) =>{

        const name = event.target.name;

        if( name == 'nameValue'){
            this.setState({[name]: event.target.value.toUpperCase()})
            return;
        }
        this.setState({[name]: event.target.value})

    }

    handleEmailChange=(event)=>{
        this.setState({emailValue : event.target.value})
    }

    handleNameChange=()=>{
        this.setState({nameValue : event.target.value.toUpperCase()})
    }

    handleLocationName=(event) =>{
        this.setState({hotelLocationName : event.target.value})
    }

    handleNameTheHotelValue = (event) =>{
        this.setState({nameOfTheHotelValue : event.target.value})
    }

    handleSubmit=(event)=>{
        alert("Are you sure you want to proceed with the booking? " + 
        this.state.nameOfTheHotelValue);
        console.log('Name submitted: ' + this.state.nameValue);
        console.log('Email Id submitted: ' + this.state.emailValue);    
        console.log('Name Of Hotel submitted: ' + this.state.nameOfTheHotelValue);
        console.log('Location submitted: ' + this.state.hotelLocationName);

    this.setState({
        nameValue: '',
        emailValue: '',
        nameOfTheHotelValue: 'SivaShankar',
        hotelLocationName:''
    });
    event.preventDefault();
    }

    render(){
        return(
            <form className="contents" onSubmit={this.handleSubmit}>
            <div className="label" >Name : </div>
            <textarea name="nameValue" value={this.state.nameValue} onChange={this.handleInputChange}/>

            <div className="label" >Email : </div>
            <input className="input" name="emailValue" type="text" value={this.state.emailValue} onChange={this.handleInputChange}/>
            
            <div className="label">
                    Name Of Hotel:
            </div>
           <select name="nameOfTheHotelValue" value={this.state.nameOfTheHotelValue} onChange={this.handleInputChange}>
            <option>Ac Hotel</option>
            <option>Comfort Hotel</option>
            <option>Luxury Hotel</option>
            <option>Delux Hotel</option>
           </select> 
           <div className="label" > Location: </div>
           <input  name="hotelLocationName" 
           className="input" 
           type="text" 
           value={this.state.hotelLocationName} 
           onChange={this.handleInputChange}/>
           <input className="button" type="submit" value="submit" />
            </form>
          
        );
    }
}

ReactDOM.render(<HotelBookingForm />,document.getElementById("outer"));