import React from 'react';

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
            <button onClick={this.handleClick}>+</button>
        );
    }
}

export default ButtonAdd;