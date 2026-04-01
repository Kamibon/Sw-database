import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  const url = "https://swapi.dev/api/";
  const res = await fetch(url + "planets/" + params.id);
  const data = await res.json();
  return data;
}

export default function Details() {
  const dati = useLoaderData<typeof loader>();

  return (
    <>
      <h1 className=" font-extrabold text-3xl text-yellow-500"> {dati.name}</h1>
      <div className=" font-bold text-3xl">Nome : {dati.name}</div>
      <div className=" font-bold text-3xl">Diametro : {dati.diameter}</div>
      <div className=" font-bold text-3xl">Clima : {dati.climate}</div>
      <div className=" font-bold text-3xl">Popolazione : {dati.population}</div>
      <Link
        className=" m-auto font-bold text-4xl hover:text-yellow-500"
        to="/categories/planets/1"
      >
        {" "}
        Torna indietro
      </Link>
    </>
  );
}
