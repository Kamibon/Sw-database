import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Star Wars Database" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const url = "https://swapi.dev/api/";

export async function loader({ params }: LoaderFunctionArgs) {
  const res = await fetch(`${url}/${params.cat}/?page=${params.index}`);
  const data = await res.json();
  data.cat = params.cat;
  return data;
}

export default function Index() {
  const load = useLoaderData<typeof loader>();
  const links = load.results;
  const cat = load.cat;

  return (
    <div className="font-sans flex flex-col items-center bg-gradient-to-br from-blue-800 to-red-700 h-auto  ">
      <div className="py-4 flex flex-col items-center">
        <ul className="flex flex-col items-center">
          {links.map((el: (typeof links)[0], i: number) => (
            <li
              className=" font-bold text-3xl m-4 hover:text-yellow-600"
              key={i}
            >
              <Link to={"/" + cat + "/" + (el.url.split("/").filter(Boolean).pop().toString())}>
                {el.name || el.title}
              </Link>{" "}
            </li>
          ))}
        </ul>
        <Form method="get">
          {Array.from({ length: Math.ceil(load.count/10) }).map((el, index) => (
            <Link
              to = {`/categories/${cat}/${index}`}
              className={" m-2 text-2xl font-bold hover:text-yellow-500"}
              key={index}
            >
              {index}
            </Link>
          ))}
        </Form>
        <br />
        <Link
          className=" m-auto font-bold text-4xl hover:text-yellow-500"
          to={"/"}
        >
          {" "}
          HOME
        </Link>
      </div>
    </div>
  );
}
