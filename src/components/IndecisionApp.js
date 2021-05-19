import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Actions from './Actions';
import Header from './Header';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    handleDelete = () => {
        this.setState(() => ({ options: [] }));
    };

    handleClearOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };


    handlePick = () => {
        const choice = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[choice];
        // alert(option);
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleAddOptions = (option) => {
        if (!option) {
            return "Enter a valid item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            ///Doing nothing

        }
    }

    componentWillUnMount() {
        console.log("Component will Unmount");

    }
    render() {
        const title = "INDECISION APP"
        const subtitle = "Let us tell you what to do!"

        return (
            <div>

                <Header
                    title={title}
                    subtitle={subtitle}
                />
                <div className='container'>
                    <Actions
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            handleDelete={this.handleDelete}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOptions
                            handleAddOptions={this.handleAddOptions}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearOption={this.handleClearOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

export default IndecisionApp;
