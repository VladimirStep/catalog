import React from 'react';

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
            if (this.props.category.childrenVisibility === 'open') {
                button = <button onClick={this.handleClose}>open</button>
            } else {
                button = <button onClick={this.handleOpen}>closed</button>
            }
        } else {
            button = <button>o</button>
        }


        return button;
    }
}

export default ButtonToggle;