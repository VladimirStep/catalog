import React from 'react';
import '../stylesheets/button_toggle.css'
import {ChildrenVisibilityStatus} from "../redux/actions";

class ButtonToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleClose(event) {
        event.preventDefault();
        this.props.closeCurrentCategory(this.props.category.id)
    }

    handleOpen(event) {
        event.preventDefault();
        this.props.openCurrentCategory(this.props.category.id)
    }

    render() {
        let button = null;

        if (this.props.category.children.length > 0) {
            if (this.props.category.childrenVisibility === ChildrenVisibilityStatus.OPENED) {
                button = <div className='button-pointer caret-down' onClick={this.handleClose}></div>
            } else {
                button = <div className='button-pointer caret-right' onClick={this.handleOpen}></div>
            }
        } else {
            button = <div className='button-pointer bullet'></div>
        }


        return button;
    }
}

export default ButtonToggle;