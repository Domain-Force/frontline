import './App.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Courses from './components/Courses';
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
			</Routes>
		</main>
		<Footer/>
    </div>
	</Router>
  );
}

export default App;
