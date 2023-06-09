import React from "react";

const CircleRating = ({ voteAverage }) => {
  const rating = Math.round(voteAverage * 10); // Convert vote_average to a percentage value
  const circumference = 2 * Math.PI * 45; // Calculate the circumference of the circle

  const offset = circumference - (rating / 100) * circumference; // Calculate the offset based on the rating

  return (
    <svg className="circle-rating" width="100" height="100">
      <circle className="circle-rating__background" cx="50" cy="50" r="45" />
      <circle
        className="circle-rating__bar"
        cx="50"
        cy="50"
        r="45"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <text className="circle-rating__text" x="50" y="58" textAnchor="middle">
        {rating}%
      </text>
    </svg>
  );
};

export default CircleRating;
