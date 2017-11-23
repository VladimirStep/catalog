import React from 'react';

class Breadcrumb extends React.Component {
    render() {
        return (
            <p>
                Catalog/
                {this.props.chain.map((category) =>
                    <span key={category.id}>{category.name}/</span>
                )}
                ...
            </p>
        );
    }
}

export default Breadcrumb;