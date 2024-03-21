import React from 'react';
import { NavLink } from 'react-router-dom';

function ArticleItem({ path, name, color }) {
  return (
	<NavLink className="article-item" to={`/articles/${path}`} style={{ backgroundColor: color }}>
	  {name}
	</NavLink>
  );
}


export default ArticleItem;
