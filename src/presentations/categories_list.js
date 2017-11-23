import React from 'react';
import CategoryItemContainer from '../containers/category_item_container';

class CategoriesList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.categories.map((category) =>
                    <CategoryItemContainer key={category.id} category={category} />
                )}
            </ul>
        );
    }
}

export default CategoriesList;