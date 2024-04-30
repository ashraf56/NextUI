import getallProducts from '@/utlis/getallProducts';
import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import Retable from './Retable';

const Allproduct = async() => {
    const {products} = await getallProducts()
    console.log(products);
  
    return (
        <div className=''>
            {
                products.map(p => (

       [p.title]
                ))
            }
        </div>
    );
};

export default Allproduct;