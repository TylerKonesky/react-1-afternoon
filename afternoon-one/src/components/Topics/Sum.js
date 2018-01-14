import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state ={
            num1: 0,
            num2: 0,
            sum: null
        }
    }
        num1Change(value){
            this.setState({num1:parseInt(value,10)});
        }
        num2Change(value){
            this.setState({num2:parseInt(value,10)});
        }
        total(num1,num2){
            this.setState({sum: num1 + num2});

        }
    
    
    
    render(){
        return(
            <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine"onChange={(e)=> this.num1Change(e.target.value)}></input>
            <input className="inputLine"onChange={(e)=> this.num2Change(e.target.value)}></input>
            <button className="confirmationButton"onClick={()=> this.total(this.state.num1,this.state.num2)}>Total</button>
            <span className="resultsBox">{this.state.sum}</span>
            </div>       
        );
    }
}
export default Sum;

