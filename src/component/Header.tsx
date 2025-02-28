"use client";
import React from "react";
import Link from "next/link";

export default function Header() {

    async function searchFilm(query: string) {
        const apiKey = "9f68057616b722079fe2dfc8ccbefcec";
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${apiKey}&query=${query}`);
        let data = await res.json();
        data = data.results;
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
                    <Link href="/"><img src="/tvc_logo.png" alt="Logo" width={100} height={50} /></Link>
                    <Link href="/" className="hover:underline">Accueil</Link>
                    <Link href="/films" className="hover:underline">Films</Link>
                    <Link href="/series" className="hover:underline">Series</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Film/Serie..."
                            className="p-2 rounded border border-gray-400"
                            id="searchbar"
                            onInput={handleSearch}
                        />
                        <div
                            id="searchResults"
                            className="absolute w-full bg-blue-200 shadow-lg mt-1 rounded max-h-60 overflow-auto"
                        ></div>
                    </div>

                    <Link href="/auth">
                        <i className="fa-solid fa-user">
                            <legend>Login/Register</legend>
                        </i>
                    </Link>
                </div>
            </header>
        </>
    );
}
