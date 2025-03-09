import { useEffect, useState } from "react";
import Footer from "@/src/component/Footer";
import Headerco from "@/src/component/Headerco";

// Définition des types pour les films
type Film = {
  title: string;
  poster_path: string;
};

export default function Films() {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const apiKey = "9f68057616b722079fe2dfc8ccbefcec";
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`
        );
        const data = await res.json();
        setFilms(data.results.slice(0, 16)); // On prend seulement les 16 premiers films
      } catch (error) {
        console.error("Erreur lors du chargement des films:", error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <>
      <Headerco />
      <h2 className="text-center text-3xl font-bold mb-6">🎬 Films</h2>

      <main className="flex justify-center py-10">
        <div className="grid grid-cols-4 gap-6">
          {films.map((film, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                    {film.title}
                  </h5>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
