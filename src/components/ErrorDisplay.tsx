import { Alert, Button } from "antd";

interface ErrorDisplayProps {
  message?: string;
  description?: string;
  onRetry?: () => void;
}

const ErrorDisplay = ({
  message = "Error",
  description = "Failed to fetch data. Please try again later.",
  onRetry,
}: ErrorDisplayProps) => {
  return (
    <Alert
      message={message}
      description={description}
      type="error"
      showIcon
      action={
        onRetry && (
          <Button type="primary" onClick={onRetry}>
            Retry
          </Button>
        )
      }
    />
  );
};

export default ErrorDisplay;
