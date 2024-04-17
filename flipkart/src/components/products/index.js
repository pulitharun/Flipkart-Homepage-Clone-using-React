import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Rowloader } from "../../common/loader";
import ProductList from "../productlist";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [Isloading, setIsloading] = useState(false);

  const clothings = products ? products.filter((i) => !i.isAccessory) : [];
  const accessories = products ? products.filter((i) => i.isAccessory) : [];

  const getProducts = async () => {
    try {
      setIsloading(true);
      const res = await fetch(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
      );
      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="products">
      <Card sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h6">Clothings</Typography>
        {Isloading && <Rowloader />}
        {!Isloading &&
          products &&
          clothings.map((item, index) => <h2 key={item.id}>{item.name}</h2>)}
      </Card>

      <Card sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h6">Best of accessories</Typography>
        {Isloading && <Rowloader />}
        {!Isloading && products && (
          <ProductList >
           { accessories.map((item, index) =>( <h2 key={item.id}>{item.name}</h2>))}
          </ProductList>
        )}
      </Card>
    </section>
  );
};

export default Products;
