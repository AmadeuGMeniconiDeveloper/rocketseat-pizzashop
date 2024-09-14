import { Link, useRouteError } from "react-router-dom";

export function Error() {
  const error = useRouteError() as Error;

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
      <p className="text-accent-foreground">
        An error occurred while processing your request. See below for more
        details:{" "}
      </p>
      <pre>{error?.message || JSON.stringify(error, null, 2)}</pre>

      <p className="text-accent-foreground">
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  );
}
