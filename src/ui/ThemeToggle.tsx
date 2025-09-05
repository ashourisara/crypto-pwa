import { Button } from "antd";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  onClick: () => void;
}

const ThemeToggle = ({ theme, onClick }: ThemeToggleProps) => {
  return (
    <Button
      type="text"
      shape="circle"
      icon={theme === "light" ? <Moon /> : <Sun />}
      onClick={onClick}
      aria-label="Toggle theme"
    />
  );
};

export default ThemeToggle;
