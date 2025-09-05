import { Layout, Typography } from "antd";
import ThemeToggle from "../ui/ThemeToggle";
import { useThemeContext } from "../hooks/useThemeContext";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Header
      className="flex items-center justify-between"
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#001529",
        borderBottom: `1px solid ${theme === "light" ? "#f0f0f0" : "#1d1d1d"}`,
      }}
    >
      <Title level={4} className="!text-inherit !m-0">
        CryptoCurreny Dashboard
      </Title>
      <ThemeToggle theme={theme} onClick={toggleTheme} />
    </Header>
  );
};

export default AppHeader;
