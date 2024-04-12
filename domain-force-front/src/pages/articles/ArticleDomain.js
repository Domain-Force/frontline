import React from 'react';
import ArticleModal from '../../components/ArticleModal';

function ArticleDomain(props) {
	const { color } = props;
	return (
	<div className='cards-container'>
		<div className="article-heading-background" style={{backgroundColor: color}}>
			<p className="article-heading" >domains (.co, .com, .org)</p>
		</div>
	</div>
);
}

export default ArticleDomain;

