import React from "react";

const CardProdutos = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title.length > 50 ? product.title.substring(0, 50) + "..." : product.title}</h3>
      <p className="product-category">Categoria: {product.category}</p>
      <p className="product-price">{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.price)}</p>
    </div>
  );
};

export default CardProdutos;