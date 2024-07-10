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
    console.log(dati)

  return (
    <div className='bg-gradient-to-br from-blue-800 to-red-700 h-full '>
     <h1 className=' font-extrabold text-3xl text-yellow-500'> {dati.name}</h1> 
     

    
     {/* {Object.keys(dati).map((el, i)=><li key={i}>{el}:</li>)} */}
     
     <div className=' font-bold text-3xl'>Nome : {dati.name}</div>
      <div className=' font-bold text-3xl'>Produttore : {dati.manufacturer}</div>
     <div className=' font-bold text-3xl'>Costo : {dati.cost_in_credits}</div>
     <div className=' font-bold text-3xl'>Velocità massima: {dati.max_atmosphering_speed}</div>
     <div className=' font-bold text-3xl'>Staff:{dati.crew}</div>
     <div className=' font-bold text-3xl'>Tipo veicolo : {dati.vehicle_class}</div> 
     
     
     
    
    </div>
  )
}
