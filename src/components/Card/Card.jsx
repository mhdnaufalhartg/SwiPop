import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const Card = (props) => {
  const handleClick = (text) => {
    let link = "";
    switch (text.toLowerCase()) {
      case "twitter":
        link = "https://twitter.com/mhdnaufalhrtg";
        break;
      case "instagram":
        link = "https://www.instagram.com/mhdnaufalhartg";
        break;
      case "github":
        link = "https://github.com/mhdnaufalhartg";
        break;
      case "email":
        link = "mailto:habibdesktop@mail.com";
        break;
      case "whatsapp":
        link = "https://api.whatsapp.com/send?phone=6282166565565";
        break;
      case "facebook":
        link = "https://www.facebook.com/mhdnaufal.ritonga.1";
        break;
      default:
        break;
    }
    window.open(link, "_blank");
  };
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 lg:p-8 shadow rounded-lg ">
          <div className="flex justify-between">
            <h1 className="text-3xl sm:text-xl lg:text-2xl underline ">
              SwiPop.exe
            </h1>
          </div>
        </div>
        <div className="bg-white p-6 lg:p-8 shadow rounded-lg mt-10">
          <h1 className="font-bold text-lg lg:text-xl">Connect With Me :</h1>
          <div className="brand pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-y-4 gap-x-4 lg:gap-x-6">
            <Button
              text={"twitter"}
              color={"bg-blue-600"}
              onClick={() => handleClick("Twitter")}
            ></Button>
            <Button
              text={"Instagram"}
              color={"bg-pink-500"}
              onClick={() => handleClick("Instagram")}
            />
            <Button
              text={"Github"}
              color={"bg-slate-900"}
              onClick={() => handleClick("Github")}
            />
            <Button
              text={"Email"}
              color={"bg-yellow-500"}
              onClick={() => handleClick("Email")}
            />
            <Button
              text={"Whatsapp"}
              color={"bg-green-500"}
              onClick={() => handleClick("Whatsapp")}
            />
            <Button text={"Facebook"} onClick={() => handleClick("Facebook")} />
          </div>
        </div>
        <div className="bg-white p-6 lg:p-8 shadow rounded-lg mt-10 ">
          <h1 className="flex justify-center items-center gap-x-1">
            Made With
            <FontAwesomeIcon icon={faHeart} className="text-red-600 " /> By
            Habib Ritonga.
          </h1>
          <h1 className="flex justify-center">
            <b>&#169; Copyright {currentYear} All Rights Reserved</b>.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
