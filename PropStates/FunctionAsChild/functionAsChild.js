var names=["sandeep","sai","peter","john","kamal","antony"];


function Names(props){
    var namesList = [];
    for(var i =0 ;i<= props.upto; i++){
        namesList.push(props.children(i,names));
    }
    return <div>{namesList}</div>;
}


function NamesList(props){
    return(
        <Names upto={props.upto}>
            {(index,names) => <div key={index}> {names[index]} </div>}
        </Names>
    );
}

ReactDOM.render(<NamesList upto={3} />, document.getElementById('outer'));