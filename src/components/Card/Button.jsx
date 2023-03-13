import {
  faCat,
  faEnvelope,
  faF,
  faI,
  faPhone,
  faT,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ text, color, onClick }) => {
  const bgColor = color || "bg-blue-500";
  let icon = null;

  switch (text) {
    case "twitter":
      icon = faT;
      break;
    case "Instagram":
      icon = faI;
      break;
    case "Github":
      icon = faCat;
      break;
    case "Email":
      icon = faEnvelope;
      break;
    case "Whatsapp":
      icon = faPhone;
      break;
    case "Facebook":
      icon = faF;
      break;
    default:
      icon = null;
  }

  return (
    <button
      className={` ${bgColor} px-4 py-2 text-white rounded-md shadow-md border-y-4 border-white`}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {text}
    </button>
  );
};

export default Button;
