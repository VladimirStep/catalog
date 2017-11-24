import React from 'react';
import styled from 'styled-components';

const Remove = styled.div`
    display: inline-block;
    width: 20px;
    text-align: center;
    &::before {
        cursor: pointer;
        content: '\\2297';
        font-size: 1em;
        color: #7f1716;    
    }
`;

class ButtonRemove extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.removeCurrentCategory(this.props.categoryId);
    }

    render() {
        return (
            <Remove onClick={this.handleClick}></Remove>
        );
    }
}

export default ButtonRemove;