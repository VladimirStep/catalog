import React from 'react';
import CategoriesListContainer from '../containers/categories_list_container';
import ButtonAddContainer from '../containers/button_add_container'
import styled from 'styled-components';

const CatalogBody = styled.div`
    width: 100%;
    background-color: #ffffff;
    padding: 20px;
`;

const CatalogTitle = styled.h3`
    margin: 0 0 15px;
`;

const RootCategoryName = styled.div`
    display: inline-block;
    margin: 0 10px;
`;

function CatalogSection() {
    return (
        <CatalogBody>
            <CatalogTitle>
                <RootCategoryName>Catalog</RootCategoryName>
                <ButtonAddContainer categoryId={0} />
            </CatalogTitle>
            <CategoriesListContainer />
        </CatalogBody>
    );
}

export default CatalogSection;