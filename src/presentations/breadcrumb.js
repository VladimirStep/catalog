import React from 'react';
import '../stylesheets/breadcrumb.css';

class Breadcrumb extends React.Component {
    render() {
        return (
            <p className='breadcrumb'>
                Catalog
                <span className='divider'>/</span>
                {this.props.chain.map((category) =>
                    <span key={category.id}>{category.name}
                        <span className='divider'>/</span>
                    </span>
                )}
                ...
            </p>
        );
    }
}

export default Breadcrumb;