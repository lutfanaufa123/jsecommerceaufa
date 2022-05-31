//import
import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';


//create variable of products
const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$39', image: 'data:image/png;base64,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' },
    {id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$29', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRYw9pPkrsKHI9iBeYAF6DhdmHDEqKHvR0dzwJWFoPGu5W8jCdN7sN35IABmXMGOoXFf1S8KeOHKE1z&usqp=CAc' },
];
   

const Products = () => {
    const classes = useStyles();
    return(

    
    <main className={classes.content}>
        <div className={classes.toolbar} />
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