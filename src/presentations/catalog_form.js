import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
        margin: 0;
    `;

const Input = styled.input`
        border: none;
        border-radius: 3px;
        padding: 10px 20px;
    `;

const Submit = styled.button`
        border: none;
        border-radius: 3px;
        padding: 10px 20px;
        margin: 0 10px;
        cursor: pointer;
        color: #ffffff;
        text-decoration: none;
        background-color: #536fb8;
        &:hover {
            background-color: #4e5fa3;
        }
    `;

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
        this.props.openParentCategory(this.props.parentId);
        this.props.addNewCategory(this.props.parentId, this.state.value);
        this.props.resetCurrentCategory();
        this.setState({ value: '' });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    innerRef={input => this.textInput = input}
                />
                <Submit type='submit'>Add Category</Submit>
            </Form>
        );
    }
}

export default CatalogForm;