import { connect } from "react-redux";
import CategoryItem from "../presentations/category_item";

function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

const CategoryItemContainer = connect(
    mapStateToProps
)(CategoryItem);

export default CategoryItemContainer;