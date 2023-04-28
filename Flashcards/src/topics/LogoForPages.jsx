import logo from '../assets/logo.png';
import './topics.css';

export default function LogoForPages() {
	const handleLogoClick = () => {
		window.location.href = '/';
	};

    return (
		<>
			<img
				src={logo}
				alt='Logo'
				onClick={handleLogoClick}
				width={300}
				height={300}
			/>
        </>
    );
}