import './App.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Articles from './pages/Articles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

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

		<main>
			<Routes>
				<Route exact path="/" element={<Home />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/courses" element={<Courses />}/>
				<Route path="/articles" element={<Articles />}/>
			</Routes>
		</main>
		<Footer/>
    </div>
	</Router>
  );
}

export default App;
