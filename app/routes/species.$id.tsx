import { LoaderFunctionArgs } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';


export async function loader({
    params,
  }: LoaderFunctionArgs) {
    const url = 'https://swapi.dev/api/'
    const res = await fetch(url+'species/'+params.id)
    const data = await res.json()
    return data
  }


export default function Details() {

    const dati = useLoaderData<typeof loader>()
    

  return (
    <div className='bg-gradient-to-br from-blue-800 to-red-700 h-full '>
     <h1 className=' font-extrabold text-3xl text-yellow-500'> {dati.name}</h1> 
     

    
     {/* {Object.keys(dati).map((el, i)=><li key={i}>{el}:</li>)} */}
     
     <div className=' font-bold text-3xl'>Nome : {dati.name}</div>
      <div className=' font-bold text-3xl'>Classificazione : {dati.classification}</div>
     <div className=' font-bold text-3xl'>Desginazione : {dati.designation}</div>
     <div className=' font-bold text-3xl'>Altezza media : {dati.average_height}</div>
     <div className=' font-bold text-3xl'>Vita media:{dati.average_lifespan}</div>
     <div className=' font-bold text-3xl'>Linguaggio : {dati.language}</div> 
     
     <Link className=" m-auto font-bold text-4xl hover:text-yellow-500" to='/categories/species'> Torna indietro</Link>
     
    
    </div>
  )
}
