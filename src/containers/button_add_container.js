import { connect } from "react-redux";
import ButtonAdd from '../presentations/button_add'
import { addCategory } from '../redux/actions'

function mapDispatchToProps(dispatch) {
    return {
        addNewSubcategory: (categoryId) => dispatch(addCategory(categoryId))
    };
}

const ButtonAddContainer = connect(null, mapDispatchToProps)(ButtonAdd);

export default ButtonAddContainer;