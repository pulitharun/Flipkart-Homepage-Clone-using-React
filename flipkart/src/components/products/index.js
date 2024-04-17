import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Rowloader } from "../../common/loader";
import ProductList from "../productlist";
import ProductCard from "../../common/productCard";

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
    <section>
    <section className="products">
      <Card sx={{ padding: 4, marginTop: 4, borderRadius: 0 }}>
        <Typography variant="h5">Best of Clothings</Typography>
        {Isloading && <Rowloader />}
        {!Isloading && products && (
          <ProductList>
            {clothings.map((item, index) => (
              <ProductCard productDetails={item} />
            ))}
          </ProductList>
        )}
      </Card>

      <Card sx={{ padding: 4, marginTop: 4, borderRadius: 0, marginBottom: 2 }}>
        <Typography variant="h5">Best of accessories</Typography>
        {Isloading && <Rowloader />}
        {!Isloading && products && (
          <ProductList>
            {accessories.map((item, index) => (
              <ProductCard productDetails={item} />
            ))}
          </ProductList>
        )}
      </Card>
    </section>
    </section>
  );
};
export default Products;
