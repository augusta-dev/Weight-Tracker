import "./Navbar.css";
import logoImg from "../assets/noun-bmi-4131090.png";
const Navbar = () => {
	const navbarItems = [
		{
			title: "How It Works",
			url: "/howItWorks",
		},
		{
			title: "Steps",
			url: "/steps",
		},
	];

	return (
		<nav className="bg-gray-50 sticky w-full lg:h-16 h-14 top-0 left-0 flex">
			<img
				src={logoImg}
				alt=""
				className="absolute lg:left-20 left-12 h-auto lg:w-44 w-40 navbar"
			/>
			<div className="float-right flex content-center justify-center lg:mr-24 mr-12 ml-auto my-auto ">
				{navbarItems.map((item) => (
					<a
						href={item.url}
						className="rounded-lg px-3 lg:px-6 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 "
					>
						{item.title}
					</a>
				))}
				<input
					type="button"
					className="h-8 w-auto py-0 px-8 my-auto lg:px-16 lg:text-base lg:h-9 ml-2 lg:ml-6 b bg-t_blue-300 text-cyan-50 rounded-xl start-shadow " value="Start Your Journey" 
				/>
			</div>
		</nav>
	);
};
export default Navbar;
