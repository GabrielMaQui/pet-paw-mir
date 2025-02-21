import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../../hooks/useWindowsSize";

const Header = ({ title, toggleMenu }) => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const backSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="40"
      height="40"
      fill="none"
      stroke="#FF4146"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M70 20 L30 50 L70 80" />
    </svg>
  );
  const cancelSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="40"
      height="40"
      fill="none"
      stroke="#FF4146"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 20 L80 80" />
      <path d="M80 20 L20 80" />
    </svg>
  );
  const menuSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="40"
      height="40"
      fill="none"
      stroke="#FF4146"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 30 H80" />
      <path d="M20 50 H80" />
      <path d="M20 70 H80" />
    </svg>
  );
  return (
    <header className="bg-custom-50 text-custom-350 p-4 flex justify-between items-center border-b-custom-200 border-b-2">
      <button className="text-custom-50" onClick={() => width>768? navigate("/feed") : toggleMenu()}>
        {/* Ícono de menú para móvil */}
        {width > 768 ? backSVG : menuSVG}
      </button>
      <h1 className="text-xl m-auto">{title}</h1>
      <button className="text-custom-50" onClick={() => navigate("/feed")}>
        {/* Ícono de menú para móvil */}
        {width > 768 ? null : cancelSVG}
      </button>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  toggleMenu: PropTypes.func,
};

export default Header;
