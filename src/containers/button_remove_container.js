import { connect } from "react-redux";
import ButtonRemove from '../presentations/button_remove'
import { removeCategory } from '../redux/actions'

function mapDispatchToProps(dispatch) {
    return {
        removeCurrentCategory: (categoryId) => dispatch(removeCategory(categoryId))
    };
}

const ButtonRemoveContainer = connect(null, mapDispatchToProps)(ButtonRemove);

export default ButtonRemoveContainer;