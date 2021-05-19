class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAdd1=this.handleAdd1.bind(this);
        this.handleMinus1=this.handleMinus1.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state ={
            count : 0
        };
    }

    handleAdd1() {
        this.setState( (prevState) => {
            return {
                count : prevState.count + 1 
        };
        })
    }
    handleMinus1() {
        this.setState( (prevState) => {
            return {
                count : prevState.count - 1 
        };
        })
    }
    handleReset(){
        this.setState( (prevState) => {
            return {
                count : prevState= 0 
        };
        })
    }
    render(){
        return (
            <div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.handleAdd1}>+1</button>
            <button onClick={this.handleMinus1} >-1</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>, document.getElementById("app"))





// let count=0;
// const add1 = () => {
//     count++;
//     reRender();
// };
// const minus1 = () => {
//     count--;
//     reRender();
// };
// const resetCount = () => {
//     count=0;
//     reRender();
// };

// const reRender = () => {

//     const template2 = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={add1}>+1</button>
//         <button onClick={minus1}>-1</button>
//         <button onClick={resetCount}>Reset</button>
//         </div>
//     )
    
//     ReactDOM.render(template2, appRoot);
    
// }
// reRender();