import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './FilterableProductTable.css';

class FilterableProductTable extends React.Component {
    render () {
        return (
            <div className="FilterableProductTable">
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        )
    }
}

export default FilterableProductTable;