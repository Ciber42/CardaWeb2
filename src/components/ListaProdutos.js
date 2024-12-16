import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProdutos from "./CardProdutos";
import ConfigerroEloading from "./ConfigerroEloading";

const ListaProdutos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get("https://fakestoreapi.com/products?limit=30");
      setProducts(response.data);
    } catch (err) {
      setError("Erro ao carregar os produtos. ");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ConfigerroEloading loading={loading} error={error} retry={fetchProducts} />
      <div className="product-container">
        {products.map((product) => (
          <CardProdutos key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListaProdutos;
