console.log('App.js is running');
console.log('Author : Abhishek Kumar Maniyal');

const app = {
    title: "INDECISION APP",
    subtitle: "Tells what you have to do or you have done today",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option=e.target.elements.option.value;
    if(option)
    {
        app.options.push(option);
        e.target.elements.option.value='';
    }
    reRender();
};


function getSubtitle(subtitle) {
    if (subtitle) {
        return app.subtitle;
    } else
        return "No subtitle"
}




const appRoot = document.getElementById('app');
//ReactDOM.render(template, appRoot);

const removing = ()=>{

    app.options=[];
    reRender();
}
const makeDecision = () => {
    const choice=Math.floor(Math.random()*app.options.length);
    alert(app.options[choice]);
}

const reRender = () => {

    const template = (
        <div>
    
            { <h1>{app.title}</h1>}
            <p>{getSubtitle(app.subtitle)}</p>
            <p> {app.options.length > 0 ? 'Options available' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length == 0} onClick={makeDecision}>What should I do</button>
            <button  onClick={removing}>Remove All</button>
            <ol>
                {
                    app.options.map( (variable) => <li key={variable}>{variable}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input placeholder="Type Here" type="text" name="option"></input>
                <button>Add option</button>
            </form>
    
        </div>);

        ReactDOM.render(template, appRoot);
}
reRender();