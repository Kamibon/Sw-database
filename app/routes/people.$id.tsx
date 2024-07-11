import { LoaderFunctionArgs } from '@remix-run/node';
import { Link, useLoaderData,isRouteErrorResponse,
 
  useRouteError } from '@remix-run/react';



export async function loader({
    params,
  }: LoaderFunctionArgs) {
    const url = 'https://swapi.dev/api/'
    const res = await fetch(url+'people/'+params.id)
    const data = await res.json()
    if(!data) throw new Response(" Sei sul pianeta sbagliato", { status: 404 });
    data.planetId = data.homeworld[data.homeworld.length - 2]
   // const planet = await fetch(data.homeworld);
   /*  data.planet = json({planet})*/
    
    return data
  }

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
          <div className="bg-gradient-to-br text-5xl from-blue-800 h-full to-red-700 text-yellow-500 font-extrabold">
            
            Sembra che tu ti sia perso fra le stelle <Link className=' hover:text-red-600' to={'/'}>Torna al pianeta natale</Link>
          </div>
        );
      } else {
        return <h1>Unknown Error</h1>;
      }
    }

export default function Details() {

    const dati = useLoaderData<typeof loader>()
    


    /* useEffect(()=>{
       
        fetch(dati.homeworld).then(res=>res.json()).then(json=>{
          setPlanet(json.name)
        planetId.current = json.url[json.url.length-2]
       })
       
    }, []) */

  return (
    <div className='bg-gradient-to-br from-blue-800 to-red-700 h-full '>
      
     

    
     {/* {Object.keys(dati).map((el, i)=><li key={i}>{el}:</li>)} */}
     <div className=' m-2'>
     <h1 className=' font-extrabold text-3xl text-yellow-500'> {dati.name}</h1>
     <div className=' font-bold text-3xl'>Nome : {dati.name}</div>
     <div className=' font-bold text-3xl'>Genere : {dati.gender}</div>
     <div className=' font-bold text-3xl'>Anno di nascita : {dati.birth_year}</div>
     <div className=' font-bold text-3xl'>Occhi : {dati.eye_color}</div>
     <div className=' font-bold text-3xl'>{dati.gender === 'male'? 'Nato' : 'Nata'} a :<Link to={'../planets/'+ dati.planetId} className='hover:text-yellow-500'> {dati.planetId}</Link></div>
     <div className=' font-bold text-3xl'>Capelli : {dati.hair_color}</div>
     </div>
     
     <Link className=" m-auto font-bold text-4xl hover:text-yellow-500" to='/categories/people'> Torna indietro</Link>
    
    </div>
  )
}
