import {useRouteError} from "react-router-dom";

const ErrorBoundary = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <div>
        <h1>Oops! Something went wrong.</h1>
        <p>{error?.error?.message}</p>
        <p>Please try again later or contact support if the issue persists.</p>
    </div>
  );
}

export default ErrorBoundary;