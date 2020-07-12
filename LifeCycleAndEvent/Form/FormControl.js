class FormControl extends React.Component{
   
    constructor(props){
       super(props);
       this.state={
           emailValue : ""
       }
       
       //if method not declared with the => symbol then manually need to bind with the this
       this.handleEmailChange = this.handleEmailChange.bind(this);
   }

   handleEmailChange(e){
        console.log("",e.target.value);
        this.setState({emailValue : e.target.value});
   }

   handleSubmit=(e)=>{
        console.log('Email address is submitted: ' + this.state.emailValue);
        alert('Here is the email address you submitted' + this.state.emailValue);
        this.setState({emailValue : ''});
        e.preventDefault();
   }

   render(){
       return(
           <form onSubmit={this.handleSubmit}>
               <div className="label">EmailAddress</div>
               <input className="input" type="text" value={this.state.emailValue} onChange={this.handleEmailChange} />
                <div>{this.state.emailValue}</div>
               <input className="button" type="submit" value="submit"/>
         </form>
         )
   }

}

ReactDOM.render(<FormControl />,document.getElementById("outer"));