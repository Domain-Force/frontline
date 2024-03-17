import React from 'react';

function Card({title, description, descList, color}) {
  return (
	<div className="card" style={{ backgroundColor: color }}>
	  <p className="card-title">{title}</p>
	  <p className="card-description">{description}</p>
	   {descList && descList.length > 0 && (
        <ul>
          {descList.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
		)}
	</div>
  );
}

export default Card;
