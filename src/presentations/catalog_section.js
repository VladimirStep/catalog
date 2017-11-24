import React from 'react';
import CategoriesListContainer from '../containers/categories_list_container';
import ButtonAddContainer from '../containers/button_add_container'
import '../stylesheets/catalog_section.css';

function CatalogSection() {
    return (
        <div className='catalog-section'>
            <h3>
                <div className='category-name'>Catalog</div>
                <ButtonAddContainer categoryId={0} />
            </h3>
            <CategoriesListContainer />
        </div>
    );
}

export default CatalogSection;