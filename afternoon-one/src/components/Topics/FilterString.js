import React, { Component } from "react"

class filterString extends Component{
    constructor(){
        super();
            this.state = {
                names: ["Candis", "Tyler", "Lauren", "Colton", "Ryan", "Hayden"],
                userInput: '',
                filteredArray: []

            }
        }
            handleChange(value){
                this.setState({userInput:value});
            }
            filteredArray(userInput){
                var names = this.state.names;
                var filteredArray = [];
                for(var i=0;i<names.length;i++){
                    if(names[i].includes(userInput)){
                        filteredArray.push(names[i]);
                    }
                }
                this.setState({filteredArray:filteredArray});
            }
        
    


render(){
    return(
        <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{JSON.stringify(this.state.names)}</span>
        <input className="inputLine" onChange={(e)=> this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={()=> this.filteredArray(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>


        </div>
    );
    }
}

export default filterString;