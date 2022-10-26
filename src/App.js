import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Government from './pages/government'
import Recommendations from './pages/recommendations';


function App() {
return (
	<div className="App">
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' exact element={<Home />} />
		<Route path='/government' element={<Government/>} />
		<Route path='/recommendations' element={<Recommendations/>} />
	</Routes>
	</Router>
	</div>
);
}

export default App;
