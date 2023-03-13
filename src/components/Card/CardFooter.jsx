import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-white p-6 lg:p-8 shadow rounded-lg mt-6 sm:mt-10 ">
      <h1 className="flex justify-center items-center gap-x-1">
        Made With
        <FontAwesomeIcon icon={faHeart} className="text-red-600 " /> By Habib
        Ritonga.
      </h1>
      <h1 className="flex justify-center">
        <b>&#169; Copyright {currentYear} All Rights Reserved</b>.
      </h1>
    </div>
  );
};

export default CardFooter;
