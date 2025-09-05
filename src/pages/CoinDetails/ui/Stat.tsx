import { Statistic } from "antd";

interface StatProps {
  title: string;
  value: string | number;
  prefix?: React.ReactNode;
}

const Stat = ({ title, value, prefix }: StatProps) => {
  return (
    <Statistic
      title={title}
      value={value}
      prefix={prefix}
      valueStyle={{ fontSize: "1.125rem" }}
      className="flex flex-row justify-between"
    />
  );
};

export default Stat;
