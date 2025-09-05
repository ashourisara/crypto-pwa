import { useThemeContext } from "../hooks/useThemeContext";
import { ConfigProvider, theme as antdTheme, App as AntApp } from "antd";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeContext();

  return (
    <ConfigProvider
      theme={{
        algorithm:
          theme === "dark"
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
      }}
    >
      <AntApp>{children}</AntApp>
    </ConfigProvider>
  );
};

export default ThemeProvider;
