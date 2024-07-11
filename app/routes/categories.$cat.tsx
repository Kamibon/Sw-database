import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";



export const meta: MetaFunction = () => {
  return [
    { title: "Star Wars Database" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const url = 'https://swapi.dev/api/'

export async function loader({
    params,
  }: LoaderFunctionArgs){
    console.log("loader")
  const res = await fetch(url + params.cat)
  const data = await res.json()
  data.cat = params.cat
  return data
}

export default function Index() {

  const load = useLoaderData<typeof loader>()
  const links  = load.results
 const cat = load.cat
 const [index, setIndex] = useState(1)


 function changeIndex(event){
     setIndex(event.target.value)

 }

  return (
    <div className="font-sans bg-gradient-to-br from-blue-800 to-red-700 h-full  ">
      <nav className="w-full font-extrabold p-[2%]  text-3xl bg-blue-900 text-yellow-500"> Il tuo super database di STAR WARS</nav>
      
        
          
         
         {links.map((el:typeof links[0],i:number)=><li className=" font-bold text-3xl m-4 hover:text-yellow-600" key={i}> <Link to={'/'+cat+'/'+ (i+1).toString()}>{el.name||el.title}</Link> </li>)} 
        
        <Form method="get">
        {[1,2,3,4,5,6,7,8,9,10].map(el=><button value={el} type="submit" onClick={changeIndex} className={" m-2 text-2xl font-bold hover:text-yellow-500" } key={el}>{el}</button>)}
        </Form>
       <br/>
       <Link className=" m-auto font-bold text-4xl hover:text-yellow-500" to={'/'}> HOME</Link>
    </div>
  );
}
