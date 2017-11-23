import { connect } from "react-redux";
import ButtonAdd from '../presentations/button_add'
import { setCurrentCategory } from '../redux/actions'

function mapDispatchToProps(dispatch) {
    return {
        addNewSubcategory: (categoryId) => dispatch(setCurrentCategory(categoryId))
    };
}

const ButtonAddContainer = connect(null, mapDispatchToProps)(ButtonAdd);

export default ButtonAddContainer;