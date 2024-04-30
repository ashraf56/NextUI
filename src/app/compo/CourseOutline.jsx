'use client'
import { Accordion, AccordionItem, Link } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

//fake data
const getDetalsProducts = async () => {
  try {
    let res = await fetch('https://dummyjson.com/products', {
      cache: 'no-cache'
    });

    if (!res.ok) {
      throw new Error("data load failed")
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const CourseOutline = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { products } = await getDetalsProducts();
      setProducts(products);
    };
    fetchData();
  }, []);

  const itemClasses = {
    title: "font-normal text-lg",
  };

  return (
    <Accordion itemClasses={itemClasses}>
      {products.map((content, i) => (
        <AccordionItem key={content.id} aria-label={`Accordion ${i + 1}`} title={`Section ${i + 1}: ${content.title}`} subtitle={`'3'/ 3 | 20 min`}>
          <Link href={`/coursedetail/detail?cotent=${content.id}`}>{content.category}</Link>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CourseOutline;
