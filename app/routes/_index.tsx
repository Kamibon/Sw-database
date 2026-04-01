import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Star Wars Database" },
    { name: "Star Wars Database", content: "Welcome to the super Star Wars Database!" },
  ];
};

export default function Index() {
  const categories = [
    "people",
    "films",
    "planets",
    "species",
    "starships",
    "vehicles",
  ];

  return (
    <>
      <div className="flex  justify-center sm:justify-start h-auto ">
        <img
          className=" h-[25%]  basis-[2%] rotate-3 mt-[5%] ml-[5%] sm:block hidden"
          src="/grogu.jpg"
          alt="Grogu"
        ></img>
        <div className="basis-[40%] text-center list-none mt-5">
          {categories.map((el) => (
            <li className="m-4" key={el}>
              <Link
                className=" font-bold text-3xl m-4 hover:text-yellow-600"
                to={"/categories/" + el + "/1" }
              >
                {el.toUpperCase()}
              </Link>
            </li>
          ))}
        </div>
        <img
          className=" size-[45%]  basis-[2%] -rotate-3 mt-[5%] sm:block hidden"
          src="/troop.jpg"
          alt="Troopers in una foresta"
        ></img>
      </div>
    </>
  );
}
