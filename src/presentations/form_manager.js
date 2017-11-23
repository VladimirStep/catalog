import React from 'react';
import BreadcrumbContainer from '../containers/breadcrumb_container';
import CatalogFormContainer from '../containers/catalog_form_container';

class FormManager extends React.Component {
    render() {
        return (
            <div className='form-manager'>
                <BreadcrumbContainer />
                <CatalogFormContainer />
            </div>
        );
    }
}

export default FormManager;