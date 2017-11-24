import React from 'react';
import CatalogSection from './catalog_section';
import FormManager from './form_manager';

function Catalog() {
    return (
        <div>
            <FormManager />
            <CatalogSection />
        </div>
    );
}

export default Catalog;