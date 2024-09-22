import React from 'react';

export function ProductCard({ product }){
    return (
        <div className='product-card-container'>

            <h1 className='product-card-title'>{product.name}</h1>
            <p className='product-card-descr'>{product.description}</p>
            <p className='product-card-price'>Price: ${product.price}</p>

        </div>
    )
}