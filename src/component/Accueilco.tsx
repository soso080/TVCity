export default async function Accueilco() {
    const apiKey = "9f68057616b722079fe2dfc8ccbefcec";
    
    let res = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`);
    let data = await res.json();
    data = data.results;
  
    let trend1 = data[0];
    let trend2 = data[1];
    let trend3 = data[2];
    let trend4 = data[3];
    let trend5 = data[4];
  
    let res_films = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`);
    let data_films = await res_films.json();
    data_films = data_films.results;
  
    let film1 = data_films[0];
    let film2 = data_films[1];
    let film3 = data_films[2];
    let film4 = data_films[3];
    let film5 = data_films[4];
  
    let res_series = await fetch(`https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${apiKey}`);
    let data_series = await res_series.json();
    data_series = data_series.results;
  
    let serie1 = data_series[0];
    let serie2 = data_series[1];
    let serie3 = data_series[2];
    let serie4 = data_series[3];
    let serie5 = data_series[4];
  
    return (
      <>
        <h1 className="text-center text-3xl font-bold mb-6">🔥 Tendances</h1>
        <main className="flex justify-center items-center py-10">
          <div className="flex justify-center gap-3">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${trend1.poster_path}`} alt="" /></a>
              <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{trend1.title || trend1.name}</h5></a></div>
            </div>
  
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${trend2.poster_path}`} alt="" /></a>
              <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{trend2.title || trend2.name}</h5></a></div>
            </div>
  
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${trend3.poster_path}`} alt="" /></a>
              <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{trend3.title || trend3.name}</h5></a></div>
            </div>
  
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${trend4.poster_path}`} alt="" /></a>
              <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{trend4.title || trend4.name}</h5></a></div>
            </div>
  
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${trend5.poster_path}`} alt="" /></a>
              <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{trend5.title || trend5.name}</h5></a></div>
            </div>
          </div>
        </main>
  
        <h2 className="text-center text-3xl font-bold mb-6">🎬 Films Populaires</h2>
        <main className="flex justify-center items-center py-10">
          <div className="flex justify-center gap-3">
            {[film1, film2, film3, film4, film5].map((film, index) => (
              <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="" /></a>
                <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{film.title}</h5></a></div>
              </div>
            ))}
          </div>
        </main>
  
        <h2 className="text-center text-3xl font-bold mb-6">📺 Séries Populaires</h2>
        <main className="flex justify-center items-center py-10">
          <div className="flex justify-center gap-3">
            {[serie1, serie2, serie3, serie4, serie5].map((serie, index) => (
              <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt="" /></a>
                <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie.name}</h5></a></div>
              </div>
            ))}
          </div>
        </main>
      </>
    );
  }
  