import React from 'react';

class CatalogForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        this.textInput.focus();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addNewCategory(this.props.parentId, this.state.value);
        this.props.resetCurrentCategory();
        this.setState({ value: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    ref={input => this.textInput = input}
                />
                <button type='submit'>Add Category</button>
            </form>
        );
    }
}

export default CatalogForm;