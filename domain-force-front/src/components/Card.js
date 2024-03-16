import React from 'react';

function Card({title, description, color}) {
  return (
	<div className="card" style={{ backgroundColor: color }}>
	  <p className="card-title">{title}</p>
	  <p className="card-description">{description}</p>
	</div>
  );
}

export default Card;
