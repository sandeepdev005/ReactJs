function Todo(props){
return <li>Todo {props.item}</li>
}

class TodoList extends React.Component{
    
    render(){
        var list =["Exercise", "Coding", "IOT Project", "Cooking"];
        return(<ul>
                {
                    list.map((todo) => <Todo key={todo} item={todo}/>)
                }
                </ul>
        );
    }
}


ReactDOM.render(<TodoList />, document.getElementById('outer'));