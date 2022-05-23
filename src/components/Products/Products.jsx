//import
import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';


//create variable of products
const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$39' },
    {id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$29' },
];
   

const Products = () => {
    return(

    
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product  product={product}/>
                </Grid>

            ))}

        </Grid>

    </main>
    );
}

export default Products;