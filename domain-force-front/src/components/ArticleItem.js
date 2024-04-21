import React from 'react';
import { NavLink } from 'react-router-dom';

function ArticleItem({ path, name, color, isComingSoon }) {
  return (
	  <NavLink 
      className={`article-item ${isComingSoon ? 'disabled' : ''}`} 
      to={isComingSoon ? '#' : `/articles/${path}`} 
      style={{ backgroundColor: color }}
    >
      {name}
      {isComingSoon && (
        <div className="coming-soon-tooltip">Coming Soon</div>
      )}
    </NavLink>
  );
}


export default ArticleItem;
