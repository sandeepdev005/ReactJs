class Number extends React.Component{
 render(){
     return(
         <div className="number">{this.props.number}</div>
     );
 }
}

class EvenNumber extends React.Component{

    constructor(props){
        super(props);
        console.log("1.Constructor ",props.number);
    }

   
    shouldComponentUpdate(nextProps,nextState){
        console.log("2.shouldComponentUpdate",nextProps);
        if(nextProps.number%2 == 0){
            console.log("shouldComponentUpdate returns true");
            return true;
        }
        console.log("shouldComponentUpdate returns false")
        return false;
    }


    render(){
        console.log("3. Render")
        if(this.props.number> 15){
            throw Error("The Number is greater than 15 need to reset it");
        }
        return(
            <div className="evennumber">{this.props.number}</div>
        );
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("4. getSnapshotBeforeUpdate ",prevProps.number);
        return prevProps.number;
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("5 .ComponentDidUpdate");
        console.log("Previous snapshot ", snapshot);
    }

}

class StreamingNumbers extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            index: 0
        }
    }

    next=()=>{
        this.setState(function(prevState){
            return{
                index : prevState.index + 1
            }
        });
    }

    componentDidCatch(error, info) {
        this.setState({
          index: 0,
        })
     }  
    
    render(){
        var number = this.props.numbers[this.state.index];
        return(
            <div className="box">
                <Number number={number}/>
                <EvenNumber number={number} />
                <button className="button" onClick={this.next}>Get next </button>
            </div>
        );
    }

}
StreamingNumbers.defaultProps={numbers:
    [3, 2, 5 , 4, 11, 12, 9, 16,
    13, 14, 12, 20, 19, 23, 26,
    35, 29, 27, 1, 2, 45]}


ReactDOM.render(<StreamingNumbers />,document.getElementById('outer'));