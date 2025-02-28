"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Headerco() {
    const router = useRouter();

    function deco() {
        localStorage.clear();
        router.push("/");
    }

    interface Film {
        title: string;
        id: number;
    }
    
    async function searchFilm(query: string) {
        const apiKey = "9f68057616b722079fe2dfc8ccbefcec";
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${apiKey}&query=${query}`);
        let data: { results: Film[] } = await res.json();
        console.log("Données reçues :", data);
    
        let resultsDiv = document.getElementById("searchResults");
        if (resultsDiv) {
            resultsDiv.innerHTML = ""; 
    
            data.results.slice(0, 5).forEach((film) => {
                let filmDiv = document.createElement("div");
                filmDiv.className = "p-2 border-b border-gray-300 bg-blue-200 hover:bg-blue-300 cursor-pointer";
                filmDiv.innerText = film.title;
                resultsDiv.appendChild(filmDiv);
            });
    
            if (data.results.length === 0) {
                let noResultDiv = document.createElement("div");
                noResultDiv.className = "p-2 text-gray-600";
                noResultDiv.innerText = "Aucun résultat trouvé.";
                resultsDiv.appendChild(noResultDiv);
            }
        }
    }

    function handleSearch() {
        const searchValue = (document.getElementById("searchbar") as HTMLInputElement).value;
        searchFilm(searchValue);
    }

    return (
        <>
            <script src="https://kit.fontawesome.com/e523edf42f.js" crossOrigin="anonymous"></script>
            <header className="bg-yellow-500 relative">
                <div className="flex items-center justify-around">
                    <Link href="/profile"><img src="/tvc_logo.png" alt="Logo" width={100} height={50} /></Link>
                    <Link href="/" className="hover:underline">Accueil</Link>
                    <Link href="/films" className="hover:underline">Films</Link>
                    <Link href="/series" className="hover:underline">Séries</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                    
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Film/Série..."
                            className="p-2 rounded border border-gray-400"
                            id="searchbar"
                            onInput={handleSearch}
                        />
                        <div
                            id="searchResults"
                            className="absolute w-full bg-blue-200 shadow-lg mt-1 rounded max-h-60 overflow-auto"
                        ></div>
                    </div>

                    <Link href="/profile">
                        <i className="fa-solid fa-user">
                            <legend>
                                Utilisateur<br />
                                <button onClick={deco}>Déco</button>
                            </legend>
                        </i>
                    </Link>
                </div>
            </header>
        </>
    );
}
