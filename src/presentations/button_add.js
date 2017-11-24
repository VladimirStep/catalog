import React from 'react';
import '../stylesheets/button_add.css';

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
            <div className='button-pointer button-add' onClick={this.handleClick}></div>
        );
    }
}

export default ButtonAdd;