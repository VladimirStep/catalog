import React from 'react';
import Breadcrumb from './breadcrumb';
import CatalogFormContainer from '../containers/catalog_form_container'

class FormManager extends React.Component {
    render() {
        return (
            <div className='form-manager'>
                <Breadcrumb />
                <CatalogFormContainer />
            </div>
        );
    }
}

export default FormManager;