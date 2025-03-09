import React from 'react';

interface TrendingItem {
    title?: string;
    name?: string;
    poster_path?: string;
}

interface ApiResponse {
    results: TrendingItem[];
}

export default async function Accueilco() {
    const apiKey = "9f68057616b722079fe2dfc8ccbefcec";
    
    const fetchData = async (url: string): Promise<TrendingItem[]> => {
        const res = await fetch(url);
        const data: ApiResponse = await res.json();
        return data.results || [];
    };

    const trends = await fetchData(`https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`);
    const films = await fetchData(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`);
    const series = await fetchData(`https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${apiKey}`);

    return (
        <>
            <h1 className="text-center text-3xl font-bold mb-6">🔥 Tendances</h1>
            <main className="flex justify-center items-center py-10">
                <div className="flex justify-center gap-3">
                    {trends.slice(0, 5).map((trend, index) => (
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
                                    <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {trend.title || trend.name || "Titre inconnu"}
                                    </h5>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <h2 className="text-center text-3xl font-bold mb-6">🎬 Films Populaires</h2>
            <main className="flex justify-center items-center py-10">
                <div className="flex justify-center gap-3">
                    {films.slice(0, 5).map((film, index) => (
                        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img 
                                    className="rounded-t-lg" 
                                    src={film.poster_path ? `https://image.tmdb.org/t/p/w500${film.poster_path}` : 'https://via.placeholder.com/150'}
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {film.title || "Titre inconnu"}
                                    </h5>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <h2 className="text-center text-3xl font-bold mb-6">📺 Séries Populaires</h2>
            <main className="flex justify-center items-center py-10">
                <div className="flex justify-center gap-3">
                    {series.slice(0, 5).map((serie, index) => (
                        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img 
                                    className="rounded-t-lg" 
                                    src={serie.poster_path ? `https://image.tmdb.org/t/p/w500${serie.poster_path}` : 'https://via.placeholder.com/150'} 
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {serie.name || "Titre inconnu"}
                                    </h5>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}