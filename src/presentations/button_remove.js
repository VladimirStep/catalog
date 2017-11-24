import React from 'react';
import '../stylesheets/button_remove.css'

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
            <div className='button-pointer button-remove' onClick={this.handleClick}></div>
        );
    }
}

export default ButtonRemove;