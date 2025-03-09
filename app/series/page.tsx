// app/series/page.tsx
import Footer from "@/src/component/Footer";
import Headerco from "@/src/component/Headerco";

// Définir une interface pour une série
interface Serie {
  poster_path: string;
  name: string;
}

export default async function Series() {
  const apiKey = "9f68057616b722079fe2dfc8ccbefcec";
  
  // Appel API pour récupérer les séries populaires
  const res = await fetch(`https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${apiKey}`);
  
  // Vérifier que la réponse est valide
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  
  // Assurer que 'data.results' contient des séries
  const series: Serie[] = data.results || [];

  return (
    <>
      <Headerco />
      <h2 className="text-center text-3xl font-bold mb-6">📺 Séries</h2>
      <main className="flex justify-center py-10">
        <div className="grid grid-cols-4 gap-6">
          {series.slice(0, 16).map((serie, index) => (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  alt={serie.name}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white">{serie.name}</h5>
                </a>
              </div>
            </div>
          ))}
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
