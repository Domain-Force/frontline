import React from 'react';
import ArticleItem from '../components/ArticleItem';

function Articles() {
	return (
		<div className="cards-container">
			<p className="heading">
				articles
				<span className="subtext">for noobs, by smarter noobs</span>
			</p>
			<br/>
			<div className="article-item-grid">
				<ArticleItem path="docker" name="moby docker (docker)" color="#FF9C9C" />
				<ArticleItem path="domains" name="domains (.com, .co, .org)" color="#A2A0F8" />
				<ArticleItem path="frontback" name="frontend & backend" color="#C1E7E3" />
				<ArticleItem path="rest" name="REST (time to sleep)" color="#96EBF6"/>
			</div>

			<p className="heading">
				coming soon
				<span className="subtext">to a theater near you</span>
			</p>
			<br/>
			<div className="article-item-grid">
				<ArticleItem name="web hosting" color="#FF9C9C" isComingSoon={true}/>
				<ArticleItem name="postgresql (post squeal)" color="#FCEE74" isComingSoon={true}/>
				<ArticleItem name="python lists (aka arrays)" color="#9CD000" isComingSoon={true}/>
				<ArticleItem name="django, not the movie" color="#A0C8F8" isComingSoon={true}/>
				<ArticleItem name="learning methodology" color="#FFD29C" isComingSoon={true}/>
				<ArticleItem name="css (pretty things wow)" color="#A2A0F8" isComingSoon={true}/>
				<ArticleItem name="html (hitmel)" color="#FFAAD3" isComingSoon={true}/>
				<ArticleItem name="javascript (optional ';')" color="#9CD000" isComingSoon={true}/>
				<ArticleItem name="react (js speedrun, any%)" color="#FCEE74" isComingSoon={true}/>
				<ArticleItem name="SOAP (time to bathe)" color="#F2AF4A" isComingSoon={true}/>
				<ArticleItem name="jira (not cumin seeds)" color="#96EBF6" isComingSoon={true}/>
				<ArticleItem name="cloudflare (oooh clouds)" color="#C3C9D2" isComingSoon={true}/>
				<ArticleItem name="figma (design cool things)" color="#4489F0" isComingSoon={true}/>
			</div>
		</div>
	);
}

export default Articles;
