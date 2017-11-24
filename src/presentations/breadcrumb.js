import React from 'react';
import styled from 'styled-components';

const Row = styled.p`
        margin: 0 0 5px;
        font-size: 13px;
    `;

const Devider = styled.span`
        margin: 0 2px;
    `;

function Breadcrumb(props) {
    return (
        <Row>
            Catalog
            <Devider>/</Devider>
            {props.chain.map((category) =>
                <span key={category.id}>{category.name}
                    <Devider>/</Devider>
                </span>
            )}
            ...
        </Row>
    );
}

export default Breadcrumb;