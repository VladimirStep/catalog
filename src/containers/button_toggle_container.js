import { connect } from "react-redux";
import ButtonToggle from '../presentations/button_toggle'
import { showChildren, hideChildren } from '../redux/actions'

function mapDispatchToProps(dispatch) {
    return {
        closeCurrentCategory: (categoryId) => dispatch(hideChildren(categoryId)),
        openCurrentCategory: (categoryId) => dispatch(showChildren(categoryId)),
    };
}

const ButtonToggleContainer = connect(state => state, mapDispatchToProps)(ButtonToggle);

export default ButtonToggleContainer;