import React from 'react';
import {ChildrenVisibilityStatus} from "../redux/actions";
import styled from 'styled-components';

const Button = styled.div`
    display: inline-block;
    width: 20px;
    text-align: center;
    vertical-align: 15%;
`;

const Bullet = Button.extend`
    &::before {
        content: '\\25CF';
        font-size: 0.68em;
    }
`;

const CaretDown = Button.extend`
    &::before {
        cursor: pointer;
        content: '\\25BC';
        font-size: 0.8em;
    }
`;

const CaretRight = Button.extend`
    &::before {
        cursor: pointer;
        content: '\\25B6';
        font-size: 0.8em;    
    }
`;

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
                button = <CaretDown onClick={this.handleClose}></CaretDown>
            } else {
                button = <CaretRight onClick={this.handleOpen}></CaretRight>
            }
        } else {
            button = <Bullet></Bullet>
        }


        return button;
    }
}

export default ButtonToggle;