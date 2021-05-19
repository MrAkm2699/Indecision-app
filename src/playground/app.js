
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);   
        }
        
    }
    componentDidMount(){
       try{
            const json=localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options){
                this.setState( ()=> ({options}) )
            }

       } catch(e) {
            ///Doing nothing

       }

    }

    
    componentWillUnMount(){
        console.log("Component will Unmount");

    }


    handleDelete() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }


    handlePick() {
        const choice = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[choice];
        alert(option);
    }
    handleAddOptions(option) {
        if (!option) {
            return "Enter a valid item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }


    render() {
        const title = "INDECISION APP"
        const subtitle = "Let us tell you what to do!"

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Actions hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDelete={this.handleDelete}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions handleAddOptions={this.handleAddOptions} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};



const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision App'
};






const Actions = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions} >What should I do?</button>
        </div>
    );
};





const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDelete}>Remove all</button>

            {props.options.length===0 && <p>No options available !</p>}
            {
                props.options.map((option) =>(
                    <Option
                        key={option}
                        optionCom={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />))
            }
        </div>
    );
};




const Option = (props) => {
    return (
        <div>
            {props.optionCom}
            <button 
            onClick={(e) => {
                props.handleDeleteOption(props.optionCom);
            }}
            >
             Remove
            </button>
        </div>
    );
};



class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOptions(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);
        this.setState(() => ({ error }));
        if(!error){
            e.target.elements.option.value="";
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input input="text" name="option" />
                    <button >Submit</button>
                </form>
            </div>
        );
    }
}



const User = () => {
    return (
        <div>
            <p>Name: </p>
            <p>Age: </p>
        </div>

    );
};



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


