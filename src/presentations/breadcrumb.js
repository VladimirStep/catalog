import React from 'react';
import '../stylesheets/breadcrumb.css';

function Breadcrumb(props) {
    return (
        <p className='breadcrumb'>
            Catalog
            <span className='divider'>/</span>
            {props.chain.map((category) =>
                <span key={category.id}>{category.name}
                    <span className='divider'>/</span>
                </span>
            )}
            ...
        </p>
    );
}

export default Breadcrumb;