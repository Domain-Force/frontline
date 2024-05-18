import React from 'react';
import CodeBlock from '../../components/CodeBlock';

function ArticleRest(props){
    const { color } = props;

    return (
        <div className='cards-container'>
            <div className="article-heading-background" style={{backgroundColor: color}}>
                <p className="article-heading">REST (time to sleep)</p>
            </div>
            <br/>
            <p className="article-section">overview</p>
            <p className="article-body">
                REST: <strong>RE</strong>presentational <strong>ST</strong>ate transfer is a set of guidelines for how computers can talk to each other.
            </p>
            <p className="article-section">disclaimer</p>
            <p className="article-body">
                this article is not a tutorial on how to design a REST API. the verbiage for most articles on REST sound like complete technobabble, so let's try to get a more intuitive understanding.
            </p>
            <div className="article-section-background" style={{backgroundColor: "#A0C8F8"}}>
			<p className="article-section">let's talk about REST.</p>
            </div>
            <p className="article-body">
                picture the scene: aliens invaded and ruined civilization. then they got bored and left. congratulations! you get put in charge of building a communication network for the survivors in your region.
                where to start? well, you probably want something like radio. people can tune in to the correct frequencies to listen in and <em>receive information. </em> 
                different frequencies can host different types of content (alerts, news, lamenting on our destroyed planet). 
            </p>
            <p className="article-body">
                it is straight forward and requires nothing further from the user than the radio itself. this is what we want to achieve using REST. we have a clean way to access different information
                by tuning into different points and the radio station doesn't need to keep track of whatever weird stuff you're listening to.
            </p>
            <div className="article-section-background" style={{backgroundColor: "#F06D06"}}>
			<p className="article-section">okay, maybe a LITTLE technobabble</p>
            </div>
            <p className="article-body">the takeaway is no strings attached. it's <em>stateless.</em> you have your frequency (endpoint), you tune in (send a request) and then you get your program 
            (XML, JSON, what have you). simple and clean. you know what that means?</p>
            <p className="article-body">
                it's fast and scaleable. and that's the name of the game.
            </p>
			<p className="article-section">check out that url up there. up underneath your countless tabs.</p>
            <p className="article-body">
                as a more primitive example, pretty much all you have to do with an API designed this way is to tack on some secret key and an endpoint to access something from us.
            </p>
            <CodeBlock>
                {
                `https://domain-force.com/articles/docker/names_of_our_cats?key=domain-force`
                }
			</CodeBlock>
            <p className="article-body">or not. there are other types of requests, too (PUT, DELETE). in fact, there's lots of ways you can go about designing a REST API and different topics to explore such as caching and security, 
            but get the concept down before you get lost in the sauce. </p>
        </div>
        
    );
};

export default ArticleRest;
