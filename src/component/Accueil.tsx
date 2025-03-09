import React from 'react';

interface TrendingItem {
    title?: string;
    name?: string;
    poster_path?: string;
}

interface ApiResponse {
    results: TrendingItem[];
}

export default async function Accueil() {
    const apiKey = "9f68057616b722079fe2dfc8ccbefcec";
    const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`);
    const data: ApiResponse = await res.json();
    
    const trend1 = data.results[0] || {};
    const trend2 = data.results[1] || {};
    const trend3 = data.results[2] || {};

    return (
        <>
            <main>
                <h1 className='text-center'>Bienvenue sur TVCity ! </h1>
                <h2 className='text-center'>Voici le top tendance !</h2>

                <div className="flex justify-center gap-3">
                    {[trend1, trend2, trend3].map((trend, index) => (
                        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img 
                                    className="rounded-t-lg" 
                                    src={trend.poster_path ? `https://image.tmdb.org/t/p/w500${trend.poster_path}` : 'https://via.placeholder.com/150'} 
                                    alt="" 
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {trend.title || trend.name || "Titre inconnu"}
                                    </h5>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <p className='text-center'>
                        Ou <a href="" className='text-blue-500 hover:underline'>inscrit toi</a> si ce n'est pas déjà fait pour avoir accès à la liste complète des films et séries et nous rejoindre !!!
                    </p>
                </div>
            </main>
        </>
    );
}