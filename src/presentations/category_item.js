import React from 'react';

class CategoryItem extends React.Component {
    render() {
        return (
            <li>{this.props.category.name}</li>
        );
    }
}

export default CategoryItem;