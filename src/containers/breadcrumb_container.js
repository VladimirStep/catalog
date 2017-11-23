import { connect } from "react-redux";
import Breadcrumb from "../presentations/breadcrumb";

function getCategoriesChain(state) {
    let chain = [];
    const categories = state.categories;
    const currentCategoryId = state.currentCategory;

    function findCategoryName(categoryId) {
        for(let category of categories) {
            if (category.id === categoryId) {
                chain.push(category);
                if (category.parentId !== 0) {
                    findCategoryName(category.parentId);
                }
                break;
            }
        }
    }

    findCategoryName(currentCategoryId);

    return chain.reverse();
}

function mapStateToProps(state) {
    return {
        chain: getCategoriesChain(state)
    };
}

const BreadcrumbContainer = connect(mapStateToProps)(Breadcrumb);

export default BreadcrumbContainer;