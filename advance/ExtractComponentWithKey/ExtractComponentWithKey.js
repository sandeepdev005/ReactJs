class Name extends React.Component {
    render() {
        return (<li>{this.props.name}</li>);
    }
}


class NamesList extends React.Component {


    render() {
        var listItems = Object.keys(this.props.names).map((key, index) => <Name key={key} name={this.props.names[key]} />);
        return (<ul className="names">{listItems}</ul>);
    }

}


const names = {
    'id1': 'Esther',
    'id2': 'Lily',
    'id3': 'Candace',
    'id4': 'Edward',
    'id5': 'Sidney'
}


ReactDOM.render(<NamesList names={names}/>, document.getElementById("react-lists"));