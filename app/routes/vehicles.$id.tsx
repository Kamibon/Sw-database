import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';



export async function loader({
    params,
  }: LoaderFunctionArgs) {
    const url = 'https://swapi.dev/api/'
    const res = await fetch(url+'vehicles/'+params.id)
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
     {/* <div className=' font-bold text-3xl'>Genere : {dati.gender}</div>
     <div className=' font-bold text-3xl'>Anno di nascita : {dati.birth_year}</div>
     <div className=' font-bold text-3xl'>Occhi : {dati.eye_color}</div>
     <div className=' font-bold text-3xl'>{dati.gender === 'male'? 'Nato' : 'Nata'} a : {dati.homeworld}</div>
     <div className=' font-bold text-3xl'>Capelli : {dati.hair_color}</div> */}
     
     
     
    
    </div>
  )
}
