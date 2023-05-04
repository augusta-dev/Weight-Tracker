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
		<nav className="bg-t_gray-200 sticky w-full h-16 top-0 left-0 flex">
			<img
				src={logoImg}
				alt=""
				className="absolute lg:left-20 left-12 h-auto w-44 navbar"
			/>
			<div className="float-right flex align-middle lg:mr-24 mr-12 ml-auto my-auto ">
				{navbarItems.map((item) => (
					<a
						href={item.url}
						className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 "
					>
						{item.title}
					</a>
				))}
				<input
					type="button"
					className="h-10 w-40 lg:w-96 ml-2 b bg-t_blue-300 "
				/>
			</div>
		</nav>
	);
};
export default Navbar;
