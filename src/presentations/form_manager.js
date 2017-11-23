import React from 'react';
import BreadcrumbContainer from '../containers/breadcrumb_container';
import CatalogFormContainer from '../containers/catalog_form_container';
import '../stylesheets/form_manager.css';

function FormManager() {
    return (
        <div className='form-manager'>
            <h3>Create new category</h3>
            <BreadcrumbContainer />
            <CatalogFormContainer />
        </div>
    );
}

export default FormManager;