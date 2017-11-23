import React from 'react';
import CategoriesListContainer from '../containers/categories_list_container';
import FormManager from './form_manager';

function Catalog() {
    return (
        <div className='catalog'>
            <FormManager />
            <CategoriesListContainer />
        </div>
    );
}

export default Catalog;