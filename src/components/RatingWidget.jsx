import React, { useState } from "react";
import PropTypes from "prop-types";
import "../RatingWidget.css";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = (newRating) => {
    setRating(newRating);
  };

  const handleMouseEnter = (newRating) => {
    setHoveredRating(newRating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = () => {
    if (rating > 0) {
      onRatingSubmit(productId, rating);
      setRating(0);
    }
  };

  return (
    <div className="rating-widget">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hoveredRating || rating) ? "filled" : ""}`}
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit} disabled={rating === 0}>
        Submit Rating
      </button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;
