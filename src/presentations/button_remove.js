import React from 'react';

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
            <button onClick={this.handleClick}>x</button>
        );
    }
}

export default ButtonRemove;