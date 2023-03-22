import Button from "./Button";

const CardBody = () => {
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
        link = "https://api.whatsapp.com/send?phone=6285156913789";
        break;
      case "facebook":
        link = "https://www.facebook.com/mhdnaufal.ritonga.1";
        break;
      default:
        break;
    }
    window.open(link, "_blank");
  };
  return (
    <div className="bg-white p-6 lg:p-8 shadow rounded-lg mt-6 sm:mt-10">
      <h1 className="font-bold text-lg lg:text-xl">Connect With Me 🍕 :</h1>
      <div className="brand pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-y-4 gap-x-4 lg:gap-x-6">
        <Button
          text={"Twitter"}
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
  );
};

export default CardBody;
