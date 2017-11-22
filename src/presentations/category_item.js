import React from 'react';
import CategoriesListContainer from '../containers/categories_list_container'

class CategoryItem extends React.Component {
    getChildrenCategories() {
        console.log(this.props);
        let childrenCategories = [];
        if (this.props.category.children.length > 0) {
            for(let childId of this.props.category.children) {
                for(let category of this.props.categories) {
                    if (category.id === childId) {
                        childrenCategories.push(category);
                    }
                }
            }
        }
        return childrenCategories;
    }

    render() {
        let listElement = null;
        const childrenCategories = this.getChildrenCategories();

        if (this.props.category.children.length > 0) {
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