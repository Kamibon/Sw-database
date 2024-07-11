
import {
    isRouteErrorResponse,
    Link,
    useRouteError,
  } from "@remix-run/react";

export  function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
          <div className=" text-yellow-500 font-extrabold">
            <h1>
              {error.status} {error.statusText} Pocco
            </h1>
            <p>{error.data}</p>
          </div>
        );
      } else if (error instanceof Error) {
        return (
          <div className=" text-yellow-500 font-extrabold">
            <h1>Error</h1>
            <p>{error.message}</p>
            <p>The stack trace is:</p>
            <pre>{error.stack}</pre>
            Sembra che tu ti sia perso fra le stelle <Link to={'/'}>Torna al pianeta natale</Link>
          </div>
        );
      } else {
        return <h1>Unknown Error</h1>;
      }
    }

