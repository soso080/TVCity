import Footer from "@/src/component/Footer";
import Headerco from "@/src/component/Headerco";

export default async function Series() {
  const apiKey = "9f68057616b722079fe2dfc8ccbefcec";
  let res = await fetch(`https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${apiKey}`);
  let data = await res.json();
  data = data.results;

  let serie1 = data[0];
  let serie2 = data[1];
  let serie3 = data[2];
  let serie4 = data[3];
  let serie5 = data[4];
  let serie6 = data[5];
  let serie7 = data[6];
  let serie8 = data[7];
  let serie9 = data[8];
  let serie10 = data[9];
  let serie11 = data[10];
  let serie12 = data[11];
  let serie13 = data[12];
  let serie14 = data[13];
  let serie15 = data[14];
  let serie16 = data[15];

  return (
    <>
      <Headerco />
      <h2 className="text-center text-3xl font-bold mb-6">📺 Séries</h2>
      <main className="flex justify-center py-10">
        <div className="grid grid-cols-4 gap-6">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie1.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie1.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie2.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie2.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie3.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie3.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie4.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie4.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie5.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie5.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie6.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie6.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie7.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie7.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie8.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie8.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie9.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie9.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie10.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie10.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie11.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie11.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie12.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie12.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie13.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie13.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie14.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie14.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie15.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie15.name}</h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${serie16.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie16.name}</h5>
              </a>
            </div>
          </div>
        </div>
      </main>

      <div className="flex justify-center my-6">
        <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          Voir Plus
        </button>
      </div>

      <Footer />
    </>
  );
}
