import React from 'react';
import Card from './Card';

function Home() {
  return (
	<div className="cards-container">
	  <p className="zero-to-production">zero to production</p>
	  <body>
		<p className="heading">courses</p>

		{/* TODO: API call to Backend to get card props from DB */}
		<div className="cards">
			<Card 
				title="domain-force speedrun"
				description="how domain force was made:"
	  			color="#FF9C9C"/>
			<Card 
				title="django or nothing"
				description="chad or python"
	  			color="#A0C8F8"/>
			<Card 
				title="third rate developer, fourth rate production"
				description="an approach to software architecture"
	  			color="#9CD000"/>
		</div>

	  <p className="heading">articles</p>
	  <div className="cards">
		<Card
			title="moby docker (docker)"
			description="how to make a container"
	  		color="#FFD89E"/>
		<Card
			title="domain name servers"
			description="what's a domain? or a name server?"
	  		color="#E0A773"/>
		<Card
			title="cloudflare"
			description="clouds can have flares?"
	  		color="#D5BBEA"/>
	  </div>
	  </body>
	</div>
  );
}

export default Home;
