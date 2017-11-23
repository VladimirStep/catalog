import React from 'react';
import CategoriesListContainer from '../containers/categories_list_container'
import ButtonRemoveContainer from '../containers/button_remove_container'
import ButtonAddContainer from '../containers/button_add_container'

class CategoryItem extends React.Component {
    render() {
        let listElement = null;
        const childrenCategories = this.props.childrenCategories;

        if (childrenCategories.length > 0) {
            listElement = <li>
                {this.props.category.name}
                <ButtonAddContainer categoryId={this.props.category.id} />
                <ButtonRemoveContainer categoryId={this.props.category.id} />
                <CategoriesListContainer currentLevelCategories={childrenCategories}/>
            </li>;
        } else {
            listElement = <li>
                {this.props.category.name}
                <ButtonAddContainer categoryId={this.props.category.id} />
                <ButtonRemoveContainer categoryId={this.props.category.id} />
            </li>;
        }

        return listElement;
    }
}

export default CategoryItem;