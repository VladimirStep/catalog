import { connect } from "react-redux";
import CategoryItem from "../presentations/category_item";

function getChildrenCategories(state, props) {
    let childrenCategories = [];
    if (props.category.children.length > 0) {
        for(let childId of props.category.children) {
            for(let category of state.categories) {
                if (category.id === childId) {
                    childrenCategories.push(category);
                }
            }
        }
    }
    return childrenCategories;
}

function mapStateToProps(state, props) {
    return {
        childrenCategories: getChildrenCategories(state, props)
    };
}

const CategoryItemContainer = connect(
    mapStateToProps
)(CategoryItem);

export default CategoryItemContainer;