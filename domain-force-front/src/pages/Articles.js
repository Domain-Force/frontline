import React from 'react';
import ArticleItem from '../components/ArticleItem';

function Articles() {
	return (
		<div className="cards-container">
			<p className="heading">articles</p>
			<br/>
			<div className="article-item-grid">
				<ArticleItem name="moby docker (docker)" color="#FF9C9C" />
				<ArticleItem name="django, not the movie" color="#A0C8F8" />
				<ArticleItem name="learning methodology" color="#A2A0F8" />
				<ArticleItem name="moby docker (docker)" color="#FF9C9C" />
				<ArticleItem name="django, not the movie" color="#A0C8F8" />
				<ArticleItem name="learning methodology" color="#A2A0F8" />
				<ArticleItem name="moby docker (docker)" color="#FF9C9C" />
				<ArticleItem name="django, not the movie" color="#A0C8F8" />
				<ArticleItem name="learning methodology" color="#A2A0F8" />
			</div>
		</div>
	);
}

export default Articles;
