import React from 'react';
import Card from './Card';

function Home() {
  return (
	<div className="cards-container">
	  <p className="zero-to-production">zero to production</p>
	  <body>
		<p className="heading">courses</p>
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
	  </body>
	</div>
  );
}

export default Home;
