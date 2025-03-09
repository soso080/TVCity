"use client";
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Film {
  title: string;
  id: number;
}

const Headerco: FC = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Film[]>([]);

  const deco = () => {
    localStorage.clear();
    router.replace("/"); // Évite de revenir en arrière après la déconnexion
  };

  useEffect(() => {
    const fetchFilms = async () => {
      if (!searchValue.trim()) {
        setSearchResults([]);
        return;
      }

      const apiKey = "9f68057616b722079fe2dfc8ccbefcec";
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${apiKey}&query=${searchValue}`
      );
      const data: { results: Film[] } = await res.json();
      setSearchResults(data.results || []);
    };

    const delayDebounce = setTimeout(fetchFilms, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchValue]);

  return (
    <>
      <header className="bg-yellow-500 relative py-4">
        <div className="flex items-center justify-around">
          <Link href="/profile">
            <img src="/tvc_logo.png" alt="Logo" width={100} height={50} />
          </Link>
          <Link href="/" className="hover:underline">
            Accueil
          </Link>
          <Link href="/films" className="hover:underline">
            Films
          </Link>
          <Link href="/series" className="hover:underline">
            Séries
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>

          {/* Barre de recherche */}
          <div className="relative">
            <input
              type="text"
              placeholder="Film/Série..."
              className="p-2 rounded border border-gray-400"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchResults.length > 0 && (
              <div className="absolute w-full bg-blue-200 shadow-lg mt-1 rounded max-h-60 overflow-auto">
                {searchResults.slice(0, 5).map((film) => (
                  <Link key={film.id} href={`/film/${film.id}`}>
                    <div className="p-2 border-b border-gray-300 hover:bg-blue-300 cursor-pointer">
                      {film.title}
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {searchValue && searchResults.length === 0 && (
              <div className="absolute w-full bg-blue-200 shadow-lg mt-1 rounded p-2 text-gray-600">
                Aucun résultat trouvé.
              </div>
            )}
          </div>

          {/* Bouton Déconnexion */}
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-user text-xl"></i>
            <button
              onClick={deco}
              className="mt-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headerco;
