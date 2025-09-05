import { Button } from "antd";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      type="text"
      icon={<ArrowLeft size={16} />}
      onClick={() => navigate("/")}
      className="mb-4"
    >
      Back to List
    </Button>
  );
};

export default BackButton;
