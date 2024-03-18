import React from 'react';
import Card from './Card';

function Courses() {
	return (
		<div className="cards-container">
			<p className="heading">choose your adventure (course)</p>
			<br/>
			<div className="cards">
				<Card 
					title="domain-force speedrun"
					description="how domain force was made:"
					descList={['tech stack deliberation', 'UI/UX and database design', 'setting up domains, servers, https','questioning my life choices']}
					color="#FF9C9C"/>
				<Card 
					title="django or nothing"
					description="how to use & deploy django"
					descList={['serving HTML templates', 'confiuring routes (urls)', 'why python makes you chad','what is bootstrap and how to use it']}
					color="#A0C8F8"/>
				<Card 
					title="third rate developer, fourth rate production"
					description="an approach to software architecture"
					descList={["what is a front and back end?", 'SQL vs NoSQL vs Graph', 'to docker or not to docker','why does it matter; literally']}
					color="#9CD000"/>
				<Card 
					title="chatting with the homies"
					description="a chat room app for you and the homies"
					descList={["what are websockets?", 'why do i need REST?', 'designing your database','making friends to use the app']}
					color="#FFD29C"/>
				<Card 
					title="new portfolio, who dis?"
					description="a portfolio to display the things you've made"
					descList={["what framework to use?", 'theming & design', 'show your friends','buying & setting up a domain']}
					color="#A2A0F8"/>
				<Card 
					title="meteorology isn't a real science"
					description="a weather app to track humidity, temperature, and more"
					descList={["what is an API?", 'creating your own historical data', 'how to make pretty graphs/charts','React? Python? why not both?']}
					color="#FFAAD3"/>
			</div>
		</div>
	);
}

export default Courses;
