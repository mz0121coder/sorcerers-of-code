import logo from '../assets/logo.png';
import './logo.css';

export default function LogoForPages() {
	const handleLogoClick = () => {
		window.location.href = '/';
	};

	return (
		<>
			<img
				id='logo'
				src={logo}
				alt='Logo'
				onClick={handleLogoClick}
				width={150}
				height={150}
			/>
		</>
	);
}
