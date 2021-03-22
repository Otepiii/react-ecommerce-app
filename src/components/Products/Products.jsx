import React from 'react';
import {Grid} from '@material-ui/core'

import Product from './Product/Product'

const products = [
    {id: 1, name: "Shoes", description: "Running shoes.", price: "$5", image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg'},
    {id: 2, name: "Macbook", description: "Apple macbook.", price: "1000", image: 'https://images.pexels.com/photos/191158/pexels-photo-191158.jpeg?cs=srgb&dl=pexels-markus-spiske-191158.jpg&fm=jpg'}
];

const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    );
   
}

export default Products;