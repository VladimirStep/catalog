import { connect } from "react-redux";
import CatalogForm from '../presentations/catalog_form'
import { addCategory } from "../redux/actions";

function mapDispatchToProps(dispatch) {
    return {
        addNewCategory: (parentId, name) => dispatch(addCategory(parentId, name))
    };
}

const CatalogFormContainer = connect(null, mapDispatchToProps)(CatalogForm);

export default CatalogFormContainer;