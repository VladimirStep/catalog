import { connect } from "react-redux";
import CatalogForm from '../presentations/catalog_form'
import { addCategory, setCurrentCategory, showChildren } from "../redux/actions";

function mapStateToProps(state) {
    return {
        parentId: state.currentCategory
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addNewCategory: (parentId, name) => dispatch(addCategory(parentId, name)),
        resetCurrentCategory: () => dispatch(setCurrentCategory(0)),
        openParentCategory: (parentId) => dispatch(showChildren(parentId))
    };
}

const CatalogFormContainer = connect(mapStateToProps, mapDispatchToProps)(CatalogForm);

export default CatalogFormContainer;