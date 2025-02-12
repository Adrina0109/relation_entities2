import React from "react";
import RatingWidget from "./RatingWidget";
import PropTypes from "prop-types";
import "../ProductCard.css";

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-rating">
          ⭐ {product.avgRating.toFixed(1)} ({product.totalRatings} ratings)
        </p>
        <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;
