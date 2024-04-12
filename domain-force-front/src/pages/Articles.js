import React from 'react';
import ArticleItem from '../components/ArticleItem';

function Articles() {
	return (
		<div className="cards-container">
			<p className="heading">articles</p>
			<br/>
			<div className="article-item-grid">
				<ArticleItem path="docker" name="moby docker (docker)" color="#FF9C9C" />
				<ArticleItem name="django, not the movie" color="#A0C8F8" />
				<ArticleItem name="learning methodology" color="#FFD29C" />
				<ArticleItem name="css (pretty things wow)" color="#A2A0F8" />
				<ArticleItem name="html (hitmel)" color="#FFAAD3" />
				<ArticleItem name="javascript (optional ';')" color="#9CD000" />
				<ArticleItem name="react (js speedrun, any%)" color="#FCEE74" />
				<ArticleItem name="REST (time to sleep)" color="#96EBF6" />
				<ArticleItem name="SOAP (time to bathe)" color="#F2AF4A" />
				<ArticleItem name="jira (not cumin seeds)" color="#96EBF6" />
				<ArticleItem name="cloudflare (oooh clouds)" color="#C3C9D2" />
				<ArticleItem name="figma (design cool things)" color="#4489F0" />
				<ArticleItem path="domains" name="domains (.com, .co, .org)" color="#A2A0F8" />
				<ArticleItem name="web hosting" color="#FF9C9C" />
				<ArticleItem name="postgresql (post squeal)" color="#FCEE74" />
				<ArticleItem name="python lists (aka arrays)" color="#9CD000" />
			</div>
		</div>
	);
}

export default Articles;
