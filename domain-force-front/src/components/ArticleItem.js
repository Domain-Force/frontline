import React from 'react';
import { NavLink } from 'react-router-dom';

function ArticleItem({ name, color }) {
  return (
	<NavLink className="article-item" to={`/article/${name}`} style={{ backgroundColor: color }}>
	  {name}
	</NavLink>
  );
}


export default ArticleItem;
