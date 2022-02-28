import React from "react";
import Header from "../../components/Header";
import './style.css';
import { Section } from "./style.js";
import data from "../../data.js";
import CardDrone from "../../components/CardDrone";

function Products() {
  const { Products } = data;
  return (
    <>
      <Header />
      <main className="products-main">
        <Section>
          {Products.map((product) => (
            <CardDrone
              src={product.src}
              title={product.title}
              price={product.price}
              key={ product.id }
            />
          ))}
        </Section>
      </main>
    </>
  );
}

export default Products;
