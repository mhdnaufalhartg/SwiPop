import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

const Card = (props) => {
  return (
    <div className="container mx-auto px-2 sm:px-6 lg:px-8 xl:px-10 ">
      <div className="max-w-3xl mx-auto">
        <CardHeader />
        <CardBody />
        <CardFooter />
      </div>
    </div>
  );
};

export default Card;
