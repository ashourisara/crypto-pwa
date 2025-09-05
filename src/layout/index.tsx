import { Layout } from "antd";
import AppHeader from "../components/AppHeader";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorDisplay from "../components/ErrorDisplay";

const AppLayout = () => {
  const { Content } = Layout;

  return (
    <Layout className="min-h-screen">
      <AppHeader />
      <Content className="p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <ErrorBoundary
            FallbackComponent={({ error, resetErrorBoundary }) => (
              <ErrorDisplay
                message={error.message}
                onRetry={resetErrorBoundary}
              />
            )}
          >
            <Outlet />
          </ErrorBoundary>
        </div>
      </Content>
    </Layout>
  );
};

export default AppLayout;
