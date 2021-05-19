//const title = 'Visibilty Toggle';
//let Visibility=false;

class ToggleVisibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibiltity=this.handleVisibiltity.bind(this);
        this.state = {
            Visibility: false
        };
    }
    handleVisibiltity() {
        this.setState((prevState) => {
            return {
                Visibility: !prevState.Visibility
            };
        })
    }

    render() {
        return (
            <div>
                <h1>Visibilty Toggle</h1>
                <button onClick={this.handleVisibiltity()}> 
        {this.state.Visibility ? "Hide details" : "Show details"}
                </button>
                {this.state.Visibility && (
                    <div>
                        <p>Hey! There are some details you want to see.</p>
                    </div>
                )}

            </div>
        );
    }
}
ReactDOM.render(<ToggleVisibility />, document.getElementById("app"));

// const show = () => {
//     Visibility= !Visibility;

//     reRender();
// };
// const appRoot = document.getElementById('app')

// const reRender= () => {

//     const template= (
//         <div>

//         <h1>{title}</h1>
//         <button onClick={show}>
//         {Visibility?'Hide details':'Show details'}
//         </button>
//         {Visibility && 
//             <div>
//            <p>Here are some details </p> 
//            </div>
//         }
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
//}
//reRender();
