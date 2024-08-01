import React from "react";

export const Review = ({review}) => {
  const data = new Date().toLocaleDateString();

  return (
    <dl key={review.id}>
      <dt>{review.user.name}:</dt>
      <dd>{data}</dd>
      <dd>{review.text}</dd>
    </dl>
  )
}