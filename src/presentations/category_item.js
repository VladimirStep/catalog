import React from 'react';
import CategoriesListContainer from '../containers/categories_list_container'
import ButtonRemoveContainer from '../containers/button_remove_container'
import ButtonAddContainer from '../containers/button_add_container'
import ButtonToggleContainer from '../containers/button_toggle_container'
import '../stylesheets/category_item.css';
import {ChildrenVisibilityStatus} from "../redux/actions";

function CategoryItem(props) {
    let listElement = null;
    const childrenCategories = props.childrenCategories;

    if (props.category.childrenVisibility === ChildrenVisibilityStatus.OPENED && childrenCategories.length > 0) {
        listElement = <li>
            <ButtonToggleContainer category={props.category} />
            <div className='category-name'>{props.category.name}</div>
            <ButtonAddContainer categoryId={props.category.id} />
            <ButtonRemoveContainer categoryId={props.category.id} />
            <CategoriesListContainer currentLevelCategories={childrenCategories}/>
        </li>;
    } else {
        listElement = <li>
            <ButtonToggleContainer category={props.category} />
            <div className='category-name'>{props.category.name}</div>
            <ButtonAddContainer categoryId={props.category.id} />
            <ButtonRemoveContainer categoryId={props.category.id} />
        </li>;
    }

    return listElement;
}

export default CategoryItem;