import React from 'react';
import CategoryItem from './category_item';

class CategoriesList extends React.Component {
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        return (
            <ul>
                {this.props.categories.map((category) =>
                    <CategoryItem key={category.id} category={category} />
                )}
            </ul>
        );
    }

    render() {
        return (
            <div className='list-wrapper'>
                {this.renderList()}
            </div>
        );
    }
}

export default CategoriesList;