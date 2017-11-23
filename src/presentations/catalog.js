import React from 'react';
import CatalogSection from './catalog_section';
import FormManager from './form_manager';

function Catalog() {
    return (
        <div className='catalog'>
            <FormManager />
            <CatalogSection />
        </div>
    );
}

export default Catalog;