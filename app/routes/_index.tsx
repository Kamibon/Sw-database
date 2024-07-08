import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";



export const meta: MetaFunction = () => {
  return [
    { title: "Star Wars Database" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};





export default function Index() {

  
 const categories = ["people", "films", "planets", "species", "starships", "vehicles"]



  return (
    <div className="font-sans flex flex-col items-center bg-gradient-to-br from-blue-800 to-red-700 h-full ">
      <nav className="w-full font-extrabold p-[2%]  text-3xl bg-blue-900 text-yellow-500"> Il tuo database di STAR WARS</nav>
      
        
          {categories.map(el=><li className="m-4" key={el}><Link className=" font-bold text-3xl m-4 hover:text-yellow-600" to={"/categories/"+ el} >{el.toUpperCase()}</Link></li>)}
        {/* {people.map((el,i)=><div className=" font-bold text-3xl m-4 hover:text-yellow-600" key={i}> <Link to={'/people/'+ (i+1).toString()}>{el.name}-{el.gender.charAt(0).toUpperCase()}</Link> </div>)} */}
        

       
    </div>
  );
}
