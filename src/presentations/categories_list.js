import React from 'react';
import CategoryItemContainer from '../containers/category_item_container';
import styled from 'styled-components';

const ListWrapper = styled.ul`
    list-style-type: none;
`;

function CategoriesList(props) {
    return (
        <ListWrapper>
            {props.categories.map((category) =>
                <CategoryItemContainer key={category.id} category={category} />
            )}
        </ListWrapper>
    );
}

export default CategoriesList;