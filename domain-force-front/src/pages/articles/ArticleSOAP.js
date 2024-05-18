import React, {useState} from 'react';
import ArticleModal from '../../components/ArticleModal';

function ArticleSOAP(props) {
	const { color } = props;
	const [{currentModal}, setModalOpen] = useState({currentModal: null});

	const openModal = (modalName) => setModalOpen({currentModal: modalName});
	const closeModal = () => setModalOpen({currentModal: null});
	return (
		<div className='cards-container'>
			<div className="article-heading-background" style={{backgroundColor: color}}>
				<p className="article-heading">SOAP (time to bathe)</p>
			</div>
			<br/>

			<div className="article-section">overview</div>
			<p className="article-body">
				SOAP is a <button className="button-like-text" onClick={() => openModal('layer')}>protocol</button> that delivers data to servers, but is different from <button className="button-like-text" onClick={() => openModal('layer')}>REST</button> in the sense that it operates on a different <button className="button-like-text" onClick={() => openModal('layer')}>layer</button> of the <button className="button-like-text" onClick={() => openModal('osi')}>OSI model</button>.
			</p>
			<p className="article-body">
			</p>


			<div className="article-section">disclaimer</div>
			<p className="article-body">
			teaching how to deploy a front end or backend is not taught in this article merely the concept of a frontend & backend is discussed.
			</p>


			<div className="article-section-background" style={{backgroundColor: "#FFDFBA"}}>
				<p className="article-section">what is SOAP?</p>
			</div>
			<p className="article-body">
				other than blah blah blah
			</p>


				{currentModal === 'protocol' && (
		<ArticleModal isOpen={true} onClose={closeModal}>
			<div className="article-heading-background" style={{backgroundColor: "#F4636C"}}>
				<p className="modal-heading">frontend</p>
			</div>
			<p className="modal-body">
				<b>the frontend</b> is the part of a website that users interact with. like this pop-up modal, or the web page that you're currently on! 
			</p>
		</ArticleModal>
		)}


		{ currentModal === 'layer' && (
		<ArticleModal isOpen={true} onClose={closeModal}>
			<div className="article-heading-background" style={{backgroundColor: "#639DF4"}}>
			    <p className="modal-heading">backend</p>
			</div>
			<p>
				<b>the backend</b> is the part of a website that users do NOT see or interact with. it's a different server (computer) handling your data, and it's where the website's logic and database are stored.
			</p>
		</ArticleModal>
		)}


				{ currentModal === 'REST' && (
		<ArticleModal isOpen={true} onClose={closeModal}>
			<div className="article-heading-background" style={{backgroundColor: "#639DF4"}}>
			    <p className="modal-heading">backend</p>
			</div>
			<p>
				<b>the backend</b> is the part of a website that users do NOT see or interact with. it's a different server (computer) handling your data, and it's where the website's logic and database are stored.
			</p>
		</ArticleModal>
		)}


				{ currentModal === 'osi' && (
		<ArticleModal isOpen={true} onClose={closeModal}>
			<div className="article-heading-background" style={{backgroundColor: "#639DF4"}}>
			    <p className="modal-heading">backend</p>
			</div>
			<p>
				<b>the backend</b> is the part of a website that users do NOT see or interact with. it's a different server (computer) handling your data, and it's where the website's logic and database are stored.
			</p>
		</ArticleModal>
		)}


		</div>
	);
}

export default ArticleSOAP;
