class NameList extends React.Component{

    render(){

        var listItem = this.props.names.map((name)=> <li>{name}</li>);
        return(
        <div>
            <ul className="name">
               {listItem}  
            </ul>
        </div>);
    }

}

const names=['John','Daniel','House'];
ReactDOM.render(<NameList names={names}/>, document.getElementById('outer'));