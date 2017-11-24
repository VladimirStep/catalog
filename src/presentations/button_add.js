import React from 'react';
import styled from 'styled-components';

const Add = styled.div`
    display: inline-block;
    width: 20px;
    text-align: center;
    &::before {
        cursor: pointer;
        content: '\\002b';
        font-size: 1em;
        color: #257f21;
        font-weight: bold;
    }
`;

class ButtonAdd extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.addNewSubcategory(this.props.categoryId);
    }

    render() {
        return (
            <Add onClick={this.handleClick}></Add>
        );
    }
}

export default ButtonAdd;