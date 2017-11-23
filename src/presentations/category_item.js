import React from 'react';
import CategoriesListContainer from '../containers/categories_list_container'

class CategoryItem extends React.Component {
    render() {
        let listElement = null;
        const childrenCategories = this.props.childrenCategories;

        if (childrenCategories.length > 0) {
            listElement = <li>
                {this.props.category.name}
                <CategoriesListContainer currentLevelCategories={childrenCategories}/>
            </li>;
        } else {
            listElement = <li>{this.props.category.name}</li>;
        }

        return listElement;
    }
}

export default CategoryItem;