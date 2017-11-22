import { connect } from "react-redux";
import CategoriesList from "../presentations/categories_list";

function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

const CategoriesListContainer = connect(
    mapStateToProps
)(CategoriesList);

export default CategoriesListContainer;