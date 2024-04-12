import React, {useState} from 'react';
import ArticleModal from '../../components/ArticleModal';

function ArticleDomain(props) {
	const { color } = props;
	const [{currentModal}, setModalOpen] = useState({currentModal: null});

	const openModal = (modalName) => setModalOpen({currentModal: modalName});
	const closeModal = () => setModalOpen({currentModal: null});
	return (
	<div className='cards-container'>
		<div className="article-heading-background" style={{backgroundColor: color}}>
			<p className="article-heading" >domains (.co, .com, .org)</p>
		</div>
		<br/>


		<div className="article-section">overview</div>
		<p className="article-body">
			domains are memorable names for a <button className="button-like-text" onClick={() => openModal('website')}>website</button>, short and simple right 😉
		</p>


		<div className="article-section">disclaimer</div>
		<p className="article-body">
			this is written very non-technically, because domains aren’t that crazy of a concept to grasp, so there’s no reason to riddle the article with technical jargon 🤷 
     	</p>
		<p className="article-body">
			also you’re only going to learn WHAT domains are, NOT how to use them in this article.
		</p>


		<div className="article-section-background" style={{backgroundColor: "#A0C8F8"}}>
			<p className="article-section">what are domains?</p>
		</div>

		<p className="article-body">
			Domains are pretty much the names of websites. Before 1985 you had to remember ports and IP addresses to get to places you wanted to go! 
		</p>
		<p className="article-body">
			The very FIRST domain was registered in 1985 and it was <a href="https://symbolics.com/">symbolics.com</a>!
		</p>
		<p className="article-body">
			Here are some other examples of domains (shameless plug included 😉):
			<ul>
				<li>
					<a href="https://domain-force.com/">https://domain-force.com/</a>
				</li>
				<li>
					<a href="https://irs.gov/">https://irs.gov/</a>
				</li>
				<li>
					<a href="https://yourcode.sucks/">https://yourcode.sucks/</a>
				</li>
			</ul>
		</p>


		<div className="article-section-background" style={{backgroundColor: "#FF968A"}}>
			<p className="article-section">who/what are domain registrars?</p>
		</div>
		<p className="article-body">
		Domain registrars are websites or if you really think about it, companies, that facilitate the purchase of a domain, management of the domain, and also ensure that you are the ONLY one that can use said domain during your lease.
		</p>
		<p className="article-body">
		Lease? Yeah dude, you can’t <em>own</em> a domain, you can only <em>lease/rent</em> one! Technically, if you keep renewing your lease, you can own it for as long as you wish 🤔
		</p>
		<p className="article-body">
			Here are some examples of domain registrars (we love porkbun, and porkbuns 🐷):
			<ul>
				<li>
					<a href="https://porkbun.com/">https://porkbun.com/</a>
				</li>
				<li>
					<a href="https://squarespace.com/">https://squarespace.com/</a>
				</li>
				<li>
					<s>
						<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">https://godaddy.com/</a>
					</s>
				</li>
				<li>
					<s>
						<a href="https://domains.google.com">https://domains.google.com/</a>
					</s>
				</li>
				<li>
					<a href="https://cheapnames.com/">https://cheapnames.com/</a>
				</li>
			</ul>
		</p>



		<div className="article-section-background" style={{backgroundColor: "#ABDEE6"}}>
			<p className="article-section">what is domain hosting?</p>
		</div>
		<p className="article-body">
			if you happen to currently own a domain, how do you use it? well…you gotta go get a server 💻
		</p>
		<p className="article-body">
		you can’t really use a domain without having a server of some sort, meaning, the server is going to be accessed by you USING your domain! hopefully, when they go to your server via your domain, you’ll have some sort of website set up 👀
		</p>
		<p className="article-body">
		what’s the point of having a domain, if there’s no server, and what’s the point of having a server if there’s nothing to see, you gotta make a website or a web application.
		</p>
		<p className="article-body">
		i’m realizing that i am not being concise… <b>it’s a server. you need a server to host/use your domain.</b>
		</p>



		<div className="article-section-background" style={{backgroundColor: "#FFCAAF"}}>
			<p className="article-section">what in the world is a domain name server (DNS)?</p>
		</div>
		<p className="article-body">
			there’s a lot of sauce to go around with this question so i’ll try to give you the more watered down version of this (because unless you want to be a part of managing the infrastructure of the internet, you don’t need to know everything).
		</p>
		<p className="article-body">
			basically, there are these huge servers whose sole purpose is to remember what IP addresses go with what domains. 
		</p>
		<p className="article-body">
			there’s different types of DNS records like <em>A, AAAA, MX, CNAME, </em>and<em> NS</em>, but the one that seems to be the most prevalent for newer people (in my humblest opinion) is the A record.
		</p>
		<p className="article-body">
			<b>DNS A records will map to an IPv4 address</b>, and basically instead of remembering something like 4.20.697.12 you could just use domain-force.com in the search bar to get to the website.
		</p>



		<div className="article-section-background" style={{backgroundColor: "#F3B0C3"}}>
			<p className="article-section">wrap up/review</p>
		</div>
		<p className="article-body">
			domains are pretty chill, main things to remember are…
			
			<ul>
				<li>
					is that they are memorable names for servers
				</li>
				<li>
					you can’t <em>own</em> a domain, you can only <em>lease/rent</em> it
				</li>
				<li>
					use Porkbun, they’re cool 😎 (we aren't sponsored by them, we just like them a lot)
				</li>
				<li>
					‘domain hosting’ is a fancy way of saying, using a domain to get to your website
				</li>
				<li>
					DNS servers remember what IP addresses go with what domains
				</li>
			</ul>
		</p>
		





		{ currentModal === 'website' && (
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

export default ArticleDomain;

