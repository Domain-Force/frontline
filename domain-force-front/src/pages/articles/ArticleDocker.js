import React, {useState} from 'react';
import ArticleModal from '../../components/ArticleModal';

function ArticleDocker(props) {
	const { color } = props;
	const [{currentModal}, setModalOpen] = useState({currentModal: null});

	const openModal = (modalName) => setModalOpen({currentModal: modalName});
	const closeModal = () => setModalOpen({currentModal: null});
  return (
	<div className="cards-container">
		<div className="article-heading-background" style={{backgroundColor: color}}>
			<p className="article-heading" >moby docker (docker)</p>
		</div>
		<br/>
		<p className="article-section">overview</p>
		<p className="article-body">
			docker is a platform for engineers to develop, deploy, and run applications with <button className="button-like-text" onClick={() => openModal('containers')}>containers</button>.
		</p>
		<p className="article-section">disclaimer</p>
		<p className="article-body">
			this article is not a tutorial on how to use docker, but rather a brief overview of what it is, what it does, and how it can be used.
	        some concepts might be foreign to you, such as <button className="button-like-text" onClick={() => openModal('servers')}>servers</button>, but that is okay. the goal is to introduce you to the concept of docker and containers.
     	</p>

		<div className="article-section-background" style={{backgroundColor: "#A0C8F8"}}>
			<p className="article-section">what is docker?</p>
		</div>
		<p className="article-body">
			docker is a tool utilized by multiple fields of software engineering to manage a softwareenvironment. specifically, it will create an environment with the same python library version, same python version, same operating system, and/or same dependencies.	
		</p>
		<p className="article-body">
		   this is important because it allows for a consistent environment for the software to run in. it allows some predictability in the behavior of the software, which reduces the risk of failure when trying to update your software with a new feature or deploying it for the first time.
		</p>

		<div className="article-section-background" style={{backgroundColor: "#9CF2C9"}}>
			<p className="article-section">how does docker work?</p>
		</div>
		<p className="article-body">
			docker has two files that can dictate an environment's variables. the <strong>Dockerfile</strong> (yes it's specifically spelled with a capital 'D') and the <strong>docker-compose.yml</strong> file.
		</p>


		{ currentModal === 'containers' && (
		<ArticleModal isOpen={true} onClose={closeModal}>
			<div className="article-heading-background" style={{backgroundColor: "#A0C8F8"}}>
				<p className="modal-heading">docker container</p>
			</div>
			<p>a <strong>docker container</strong>, or simply <strong>container</strong>, is an environment that docker makes to run software.</p>

			<div className="article-heading-background" style={{backgroundColor: "#9CF2C9"}}>
				<p className="modal-section">analogy</p>
			</div>
			<p className="modal-body">
				imagine you had an XBox, Playstation and a Nintendo switch. how cool it would be if you could use the same video game disc/cartridge across all three systems? that is what docker containers do but instead of game consoles, it is for Linux, Windows, and MacOS.
			</p>
		</ArticleModal>
		)}


		{ currentModal === 'servers' && (
		<ArticleModal isOpen={true} onClose={closeModal}>
			<div className="article-heading-background" style={{backgroundColor: "#FFAAD3"}}>
			    <p className="modal-heading">servers</p>
			</div>
			<p>a <strong>server</strong> is a computer that provides data to other computers. it may serve data to systems on a local area network (LAN) or a wide area network (WAN) over the internet.</p>

			<div className="article-heading-background" style={{backgroundColor: "#F2AF4A"}}>
				<p className="modal-section">analogy</p>
			</div>
			<p className="modal-body">
				think of a server as a waiter at a restaurant. the waiter takes your order, brings the food to your table, and then takes your payment. in this analogy, the restaurant is the server, the waiter is the server, and the food is the data.
			</p>
		</ArticleModal>
		)}
	</div>
  );
}

export default ArticleDocker;
