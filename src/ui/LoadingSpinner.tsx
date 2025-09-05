import { Spin } from "antd";

const LoadingSpinner = () => {
  return (
    <div className="text-center p-10">
      <Spin size="large" />
    </div>
  );
};

export default LoadingSpinner;
