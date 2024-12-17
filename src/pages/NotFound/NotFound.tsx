import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[100vh] flex items-center justify-center flex-col">
      <h1 className="text-5xl font-bold text-center text-white uppercase">
        Sorry ! Content Not Found 😢
      </h1>
      <Link to={"/"}>
        <Button variant="outline" className="mt-5 font-bold">
          Go Back{" "}
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
