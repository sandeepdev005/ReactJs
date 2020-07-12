class FileInput extends React.Component{

    constructor(props){
        super(props);
        this.fileInputRef = React.createRef();
    }

    handleSubmit=(event) =>{
        var fileName = this.fileInputRef.current.files[0].name;
        alert("Do you want to upload this file ? "+ fileName);
        event.preventDefault();
    }

    render(){
        return(
        <form className="contents" onSubmit={this.handleSubmit}>
               <label> File Upload <input type="file"  ref={this.fileInputRef} /></label><br/>
                <input className="button" type="submit" value="submit"/>
        </form>)
    }
}

ReactDOM.render(<FileInput />, document.getElementById("outer"));