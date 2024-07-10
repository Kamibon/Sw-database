import { LoaderFunctionArgs } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';




export async function loader({
    params,
  }: LoaderFunctionArgs) {
    const url = 'https://swapi.dev/api/'
    const res = await fetch(url+'films/'+params.id)
    const data = await res.json()
    return data
  }


export default function Details() {

    const dati = useLoaderData<typeof loader>()
    

  return (
    <div className='bg-gradient-to-br from-blue-800 to-red-700 h-full '>
    
    
    <div className='m-2'>
     <h1 className=' font-extrabold text-3xl text-yellow-500'> {dati.title}</h1> 
     

    
    
     
     <div className=' font-bold text-3xl'>Titolo : {dati.title}</div>
    <div className=' font-bold text-3xl'>Episodio: {dati.episode_id}</div>
     <div className=' font-bold text-3xl'>Anno di uscita : {dati.release_date}</div>
     <div className=' font-bold text-3xl'>Direttore : {dati.director}</div>
     
     <div className=' font-bold text-3xl'>Descrizione : {dati.opening_crawl}</div> 
     
     
     
    { <Link className=" m-auto font-bold text-4xl hover:text-yellow-500" to='/categories/films'> Torna indietro</Link> }
    </div>
    </div>
  )
}
