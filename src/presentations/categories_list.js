import React from 'react';
import CategoryItemContainer from '../containers/category_item_container';

function CategoriesList(props) {
    return (
        <ul>
            {props.categories.map((category) =>
                <CategoryItemContainer key={category.id} category={category} />
            )}
        </ul>
    );
}

export default CategoriesList;