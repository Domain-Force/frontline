import React, {useState} from 'react';
import ArticleModal from '../../components/ArticleModal';

function ArticleDocker(props) {
	const { color } = props;
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);
  return (
	<div className="cards-container">
	  <div className="article-heading-background" style={{backgroundColor: color}}>
		  <p className="article-heading" >moby docker (docker)</p>
	  </div>
	  <br/>
	  <p className="article-section">overview</p>
	  <p className="article-body">
		docker is a platform for engineers to develop, deploy, and run applications with <button className="button-like-text" onClick={openModal}>containers</button>.

	  
	  </p>
	  <p className="article-section">disclaimer</p>
	  <p className="article-body">
		test disclaimer
	  </p>
		<ArticleModal isOpen={isModalOpen} onClose={closeModal}>
			<p className="article-heading">docker container</p>
			<p>a <strong>docker container</strong>, or simply <strong>container</strong>, is an environment that docker makes to run software.</p>

			<p className="article-section">analogy</p>
			<p className="article-body">
				
			</p>
		</ArticleModal>
	
	</div>
  );
}

export default ArticleDocker;
