import React from 'react';
import BreadcrumbContainer from '../containers/breadcrumb_container';
import CatalogFormContainer from '../containers/catalog_form_container';
import styled from 'styled-components';

const HeaderForm = styled.div`
        width: 100%;
        background-color: #6ba6fb;
        padding: 20px;
    `;

const FormTitle = styled.h3`
        margin: 0 0 15px;
    `;

function FormManager() {
    return (
        <HeaderForm>
            <FormTitle>Create new category</FormTitle>
            <BreadcrumbContainer />
            <CatalogFormContainer />
        </HeaderForm>
    );
}

export default FormManager;