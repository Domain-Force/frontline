import React from 'react';
import Card from '../components/Card';

function Home() {
  return (
	<div className="cards-container">
	{/* TODO: Recreate the image with HTML/JS/CSS */}
	  <img src="/hookztp.svg"
		   alt="zero to production"
		   style={{ width: '100%', minWidth: '40%', marginTop: '40px', marginBottom: '40px' }} />
	  <body>
		<p className="heading">
			courses
			<span className="subtext">
	  {"bet you won't learn this in school"}
			</span>
		</p>

		{/* TODO: API call to Backend to get card props from DB */}
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
		</div>

	  <p className="heading">
		articles
		<span className="subtext">
		  {"make smart you, we will ~yoda"}
		</span>
	  </p>
	  <div className="cards">
		<Card
			title="moby docker (docker)"
			description="how docker? where docker?"
			descList={['what docker?', 'using docker for your projects', 'iT rUnS oN mY MaChInE','docker vs native']}
	  		color="#FFD89E"/>
		<Card
			title="domain name servers"
			description="what's a domain? or a name server?"
			descList={['buying a domain', 'what to avoid', 'suggestions on where to buy','hopefully not getting scammed']}
	  		color="#E0A773"/>
		<Card
			title="cloudflare"
			description="clouds can have flares?"
			descList={['what is a domain name server (dns)', 'configuring dns records', 'mom get the camera, my domain is up!']}
	  		color="#D5BBEA"/>
	  </div>
	  </body>
	</div>
  );
}

export default Home;
