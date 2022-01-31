import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="container">
			<Header className="header" content="The Job Board" />
			<Jobs className="jobs" />
			<Footer
				className="footer"
				content="Made with React at Le Reacteur By Manuel"
			/>
		</div>
	);
};

export default App;
