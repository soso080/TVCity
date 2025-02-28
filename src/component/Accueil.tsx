import React from 'react';

export default async function Accueil(){
    const apiKey = "9f68057616b722079fe2dfc8ccbefcec"
    let res = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`);
    let data = await res.json();
    data = data.results;
    let trend1 = data[0];
    let trend2 = data[1];
    let trend3 = data[2];
    console.log(trend1)
    return(
        <>
        <main>
            <h1 className='text-center'>Bienvenue sur TVCity ! </h1>
            <h2 className='text-center'>Voici le top tendance !</h2>

            <div className="flex justify-center gap-3">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#"><img className="rounded-t-lg" src={trend1.poster_path ? 'https://image.tmdb.org/t/p/w500' + trend1.poster_path : 'https://via.placeholder.com/150'} alt="" /></a>
                    <div className="p-5">
                        <a href="#"><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{trend1.title}</h5></a>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#"><img className="rounded-t-lg" src={trend2.poster_path ? 'https://image.tmdb.org/t/p/w500' + trend2.poster_path : 'https://via.placeholder.com/150'} alt="" /></a>
                    <div className="p-5">
                        <a href="#"><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{trend2.title}</h5></a>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#"><img className="rounded-t-lg" src={trend3.poster_path ? 'https://image.tmdb.org/t/p/w500' + trend3.poster_path : 'https://via.placeholder.com/150'} alt="" /></a>
                    <div className="p-5">
                        <a href="#"><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{trend3.title}</h5></a>
                    </div>
                </div>
            </div>

            <div>
                <p className='text-center'>Ou <a href="" className='text-blue-500 hover:underline'>inscrit toi</a> si ce n'est pas deja fait pour avoir acces a la liste complete des films et series et nous rejoindre !!!</p>
                </div>


            
        </main>
        </>
    )
}