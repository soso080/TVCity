import Footer from "@/src/component/Footer";
import Headerco from "@/src/component/Headerco";

export default async function Films() {
    const apiKey = "9f68057616b722079fe2dfc8ccbefcec";
    let res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`);
    let data = await res.json();
    data = data.results;

    let film1 = data[0];
    let film2 = data[1];
    let film3 = data[2];
    let film4 = data[3];
    let film5 = data[4];
    let film6 = data[5];
    let film7 = data[6];
    let film8 = data[7];
    let film9 = data[8];
    let film10 = data[9];
    let film11 = data[10];
    let film12 = data[11];
    let film13 = data[12];
    let film14 = data[13];
    let film15 = data[14];
    let film16 = data[15];

    return (
        <>
            <Headerco />
            <h2 className="text-center text-3xl font-bold mb-6">🎬 Films</h2>

            <main className="flex justify-center py-10">
                <div className="grid grid-cols-4 gap-6">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${film1.poster_path}`} alt="" /></a>
                        <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{film1.title}</h5></a></div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${film2.poster_path}`} alt="" /></a>
                        <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{film2.title}</h5></a></div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${film3.poster_path}`} alt="" /></a>
                        <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{film3.title}</h5></a></div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${film4.poster_path}`} alt="" /></a>
                        <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{film4.title}</h5></a></div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${film5.poster_path}`} alt="" /></a>
                        <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{film5.title}</h5></a></div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${film6.poster_path}`} alt="" /></a>
                        <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{film6.title}</h5></a></div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${film7.poster_path}`} alt="" /></a>
                        <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{film7.title}</h5></a></div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${film8.poster_path}`} alt="" /></a>
                        <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{film8.title}</h5></a></div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${film9.poster_path}`} alt="" /></a>
                        <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{film9.title}</h5></a></div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${film10.poster_path}`} alt="" /></a>
                        <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{film10.title}</h5></a></div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${film11.poster_path}`} alt="" /></a>
                        <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{film11.title}</h5></a></div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#"><img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${film12.poster_path}`} alt="" /></a>
                        <div className="p-5"><a href="#"><h5 className="text-xl font-bold text-gray-900 dark:text-white">{film12.title}</h5></a></div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
