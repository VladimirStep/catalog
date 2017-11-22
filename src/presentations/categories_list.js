import React from 'react';
import CategoryItem from './category_item';

class CategoriesList extends React.Component {
    findCurrentLevelCategories() {
        if (this.props.currentLevelCategories && this.props.currentLevelCategories.length > 0) {
            return this.props.currentLevelCategories
        }

        let currentLevelCategories = [];

        for(let category of this.props.categories) {
            if (category.parentId === 0) {
                currentLevelCategories.push(category);
            }
        }
        return currentLevelCategories;
    }

    render() {
        const parentCategories = this.findCurrentLevelCategories();

        return (
            <ul>
                {parentCategories.map((category) =>
                    <CategoryItem key={category.id} category={category} categories={this.props.categories}/>
                )}
            </ul>
        );
    }
}

export default CategoriesList;