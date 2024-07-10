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
    <div className="font-sans flex flex-col   bg-gradient-to-br from-blue-800 to-red-700 h-full ">
      <nav className="w-full font-extrabold p-[2%]  text-3xl bg-blue-900 text-yellow-500"> Il tuo database di STAR WARS</nav>
      
      <div className="flex  items-start ">
      <img className=" h-[25%]  basis-[2%] rotate-3 mt-[5%] ml-[5%]" src="/grogu.jpg" alt="Grogu"></img>
          <div className="basis-[40%] text-center mt-5">
          {categories.map(el=><li className="m-4" key={el}><Link className=" font-bold text-3xl m-4 hover:text-yellow-600" to={"/categories/"+ el} >{el.toUpperCase()}</Link></li>)}
          </div>
          <img className=" size-[45%]  basis-[2%] -rotate-3 mt-[5%]"  src="/troop.jpg" alt="Troopers in una foresta"></img>
        </div> 
        
       
    </div>
  );
}
