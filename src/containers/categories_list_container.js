import { connect } from "react-redux";
import CategoriesList from "../presentations/categories_list";

function findCurrentLevelCategories(state, props) {
    console.log(state, props.currentLevelCategories);

    if (props.currentLevelCategories && props.currentLevelCategories.length > 0) {
        return props.currentLevelCategories
    }

    let currentLevelCategories = [];

    for(let category of state.categories) {
        if (category.parentId === 0) {
            currentLevelCategories.push(category);
        }
    }
    return currentLevelCategories;
}

function mapStateToProps(state, props) {
    return {
        categories: findCurrentLevelCategories(state, props)
    };
}

const CategoriesListContainer = connect(
    mapStateToProps
)(CategoriesList);

export default CategoriesListContainer;