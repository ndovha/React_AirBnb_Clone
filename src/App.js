import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import data from './data';
import './index.css';

function App() {
	const cards = data.map((item) => {
		return (
			<Card
        key={item.id}
				item={item}
			/>
		);
	});
	return (
		<>
			<NavBar />
			<Hero />
			<section className='cards-list'>{cards}</section>
		</>
	);
}

export default App;
