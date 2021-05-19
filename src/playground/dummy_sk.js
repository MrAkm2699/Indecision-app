import "./dummy.css"

const SlideButton = () => {
    return (
        <div>
            <h1>Checking working of a button </h1>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
        </div>
    );
}
ReactDOM.render(< SlideButton />,document.getElementById("app"));