import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<div className="h-screen w-screen">
				<Navbar />
				<p className="text-sm lg:text-lg text-blue-950 bg-mycyan-300">
					Hello World eyey!
				</p>
				<p className="border-2 border-teal-600 text-teal-300">
					Hi World!
				</p>
		</div>
	);
}
//The good thing about tailwind is that it only creates the classes it needs, without involving excesses.

export default App;
