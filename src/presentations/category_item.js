import React from 'react';
import CategoriesListContainer from '../containers/categories_list_container'
import ButtonRemoveContainer from '../containers/button_remove_container'
import ButtonAddContainer from '../containers/button_add_container'
import ButtonToggleContainer from '../containers/button_toggle_container'
import '../stylesheets/category_item.css';

class CategoryItem extends React.Component {
    render() {
        let listElement = null;
        const childrenCategories = this.props.childrenCategories;

        if (this.props.category.childrenVisibility === 'open' && childrenCategories.length > 0) {
            listElement = <li>
                <ButtonToggleContainer category={this.props.category} />
                <div className='category-name'>{this.props.category.name}</div>
                <ButtonAddContainer categoryId={this.props.category.id} />
                <ButtonRemoveContainer categoryId={this.props.category.id} />
                <CategoriesListContainer currentLevelCategories={childrenCategories}/>
            </li>;
        } else {
            listElement = <li>
                <ButtonToggleContainer category={this.props.category} />
                <div className='category-name'>{this.props.category.name}</div>
                <ButtonAddContainer categoryId={this.props.category.id} />
                <ButtonRemoveContainer categoryId={this.props.category.id} />
            </li>;
        }

        return listElement;
    }
}

export default CategoryItem;