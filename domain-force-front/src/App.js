import './App.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Articles from './pages/Articles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ArticleDocker from './pages/articles/ArticleDocker';
import ArticleDomain from './pages/articles/ArticleDomain';
import ArticleFrontBack from './pages/articles/ArticleFrontBack';
import ArticleCsharp from './pages/articles/ArticleCsharp';
import ArticleRest from './pages/articles/ArticleRest';

function App() {
  return (
	<Router>
	<div className="light-mode">
		<header>
			<Helmet>
			<title>Domain-Force</title>
			</Helmet>
			<NavBar/>
		</header>
		<head>
			<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1599813788077089"
     crossorigin="anonymous"></script>
		</head>

		<main>
			<Routes>
				<Route exact path="/" element={<Home />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/courses" element={<Courses />}/>
				<Route path="/articles" element={<Articles />}/>
				<Route path="/articles/docker" element={<ArticleDocker color="#FF9C9C"/>} />
				<Route path="/articles/domains" element={<ArticleDomain color="#A2A0F8"/>} />
				<Route path="/articles/frontback" element={<ArticleFrontBack color="#C1E7E3"/>} />
				<Route path="/articles/csharp" element={<ArticleCsharp color="#F06D06"/>} />
				<Route path="/articles/rest" element={<ArticleRest color="#96EBF6"/>} />
			</Routes>
		</main>
		<Footer/>
    </div>
	</Router>
  );
}

export default App;
