import React, {useState} from 'react';
import ArticleModal from '../../components/ArticleModal';

function ArticleFrontBack(props) {
	const { color } = props;
	const [{currentModal}, setModalOpen] = useState({currentModal: null});

	const openModal = (modalName) => setModalOpen({currentModal: modalName});
	const closeModal = () => setModalOpen({currentModal: null});
	return (
		<div className='cards-container'>
			<div className="article-heading-background" style={{backgroundColor: color}}>
				<p className="article-heading">frontend & backend</p>
			</div>
			<br/>

			<div className="article-section">overview</div>
			<p className="article-body">
				the <button className="button-like-text" onClick={() => openModal('frontend')}>frontend</button> is like a beautiful plate of food. the <button className="button-like-text" onClick={() => openModal('backend')}>backend</button> is like the kitchen where it was prepared, cooked, and plated.
			</p>
			<p className="article-body">
			...if you can’t tell, i am very hungry 🙃
			</p>


			<div className="article-section">disclaimer</div>
			<p className="article-body">
			teaching how to deploy a front end or backend is not taught in this article merely the concept of a frontend & backend is discussed.
			</p>


			<div className="article-section-background" style={{backgroundColor: "#FFDFBA"}}>
				<p className="article-section">what is a website/web application (resi’s perspective)?</p>
			</div>
			<p className="article-body">
				in Resi’s mind palace, i consider a website/web application like a TGIF (an American restaurant). specifically, i consider the frontend the main entree, and i consider the backend the kitchen where the food is made! 
			</p>


			<div className="article-section-background" style={{backgroundColor: "#F4636C"}}>
				<p className="article-section">
					frontend
				</p>
			</div>
			<p className="article-body">
				ah, the frontend - the delectable face of your online presence, the tantalizing treat that beckons users to indulge in your digital delights. it's like the perfectly plated dish that catches your eye from across the room, drawing you in with its visual appeal and promising a satisfying experience.
			</p>

			<div className="article-section-background" style={{backgroundColor: "#FBA6AC"}}>
				<p className="article-sub-section">design</p>
			</div>
			<p className="article-body">
				just like a master chef carefully crafts each component of a dish for maximum aesthetic appeal, frontend designers painstakingly sculpt pixels and colors to create a visually stunning masterpiece. it's all about creating that wow factor that leaves users drooling over your website or app.
			</p>

			<div className="article-section-background" style={{backgroundColor: "#FED1D2"}}>
				<p className="article-sub-section">user interface</p>
			</div>
			<p className="article-body">
				think of the user interface as the garnish on your plate - the little touches that elevate the dining experience. it's about making sure everything is intuitively laid out, easy to navigate, and pleasing to the eye. after all, nobody wants to struggle with a clunky interface when they're trying to enjoy their meal.
			</p>

			<div className="article-section-background" style={{backgroundColor: "#FFE9E9"}}>
				<p className="article-sub-section">user experience</p>
			</div>
			<p className="article-body">
				ah, the ultimate taste test! user experience is like the first bite of your dish - it should be seamless, satisfying, and leave users craving more. from smooth transitions to lightning-fast load times, every aspect of the frontend should work together to create an unforgettable experience for your visitors.
			</p>

			<div className="article-section-background" style={{backgroundColor: "#639DF4"}}>
				<p className="article-section">backend</p>
			</div>
			<p className="article-body">
				now, let's step into the kitchen - the bustling heart of your operation where all the magic happens behind the scenes.
			</p>

			<div className="article-section-background" style={{backgroundColor: "#80AEF3"}}>
				<p className="article-sub-section">website logic</p>
			</div>
			<p className="article-body">
				just like a chef orchestrates a symphony of flavors in the kitchen, backend developers work their magic to bring your website to life. it's all about crafting the logic and functionality that make your site tick, ensuring everything runs smoothly and efficiently.
			</p>

			<div className="article-section-background" style={{backgroundColor: "#9DBFF2"}}>
				<p className="article-sub-section">translator between frontend and database</p>
			</div>
			<p className="article-body">
				think of this as the sous chef - the unsung hero who bridges the gap between the frontend and the database, ensuring seamless communication between the two. it's all about making sure your website's frontend can access the data it needs to deliver a mouthwatering experience for users.
			</p>

			<div className="article-section-background" style={{backgroundColor: "#BFD5F5"}}>
				<p className="article-sub-section">database</p>
			</div>
			<p className="article-body">
				ah, the pantry of your digital kitchen! The database is where all your ingredients are stored, ready to be whipped up into something delicious at a moment's notice. from user profiles to product listings, it's the backbone of your website, holding everything together behind the scenes.
			</p>

			<div className="article-section-background" style={{backgroundColor: color}}>
				<p className="article-section">review</p>
			</div>
			<p className="article-body">
				peeling back the curtain on the snazzy world of web development, we’ve dished out the spicy details on the glam frontend—the sexy plate of food that wows your eyeballs—and the gritty backend—the kitchen chaos where the real magic happens. 
			</p>
			<p className="article-body">
				so, while you won’t find any recipes for deploying these bad boys here, you’ve got the scoop on how they whip up a web experience that’s as delightful as a surprise dessert. bon appétit, web connoisseurs!
			</p>
		</div>
	);
}

export default ArticleFrontBack;
