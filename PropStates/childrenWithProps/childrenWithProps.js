const RedText = (props) => {
    return <div className="red">{props.children}</div>
}


const GreenText = (props) => {
    return <div className="green">{props.children}</div>
}



ReactDOM.render(<RedText>Hello</RedText>, document.getElementById("outer-1"))

ReactDOM.render(<GreenText>
    <span>Some more nested element <u>here</u> &amp <b>here</b> </span>
</GreenText>, document.getElementById('outer-2'));

ReactDOM.render(<RedText>
     <span>Some more nested element <u>here</u> &amp <b>here</b> </span>
</RedText>, document.getElementById("outer-3"));