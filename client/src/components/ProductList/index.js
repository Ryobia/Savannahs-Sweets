import React from 'react';
import Product from '../Product';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import { useQuery } from '@apollo/react-hooks';

function ProductList() {
    const { data } = useQuery(QUERY_ALL_PRODUCTS);

    if (!data) {
        return (
            <div>
                No available products
            </div>
        )
    }
    return (
        
        <div className="product-list">
            <a>
            {data.products.map((product) => (
                <Product
                    key={product._id}
                    {...product}
                ></Product>
            ))}
            </a>
        </div>
        
    )
}

export default ProductList;