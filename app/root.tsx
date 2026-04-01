import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="font-sans flex flex-col   bg-gradient-to-br from-blue-800 to-red-700 h-full ">
          <nav className="w-full text-center font-extrabold p-[2%]  text-3xl bg-blue-900 text-yellow-500">
            {" "}
            Il tuo super database di STAR WARS
          </nav>
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
