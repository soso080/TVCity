"use client";

import { useState } from "react";
import { Login } from "@/app/actions/login";
import { useRouter } from "next/navigation";

export default function Loginform() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const result = await Login(formData);

    if (result.error) {
      setError(result.error);
    } else {
      router.push("/profile");
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Connecte-toi !
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Pour voir la liste complète des films et séries, connecte-toi !
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              required
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />

            {error && (
              <p aria-live="polite" className="text-red-500 text-center animate-pulse">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
