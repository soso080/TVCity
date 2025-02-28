"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Register } from "@/app/actions/register";

export default function Registerform() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const result = await Register(formData);

    if (result.error) {
      setError(result.error);
    } else {
      router.push("/profile");
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <p>Inscris-toi pour accéder à la liste complète des films et séries ainsi qu'à bien plus encore !</p>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Inscris-toi !
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <input type="text" name="nom" placeholder="Nom" required className="input" />
              <input type="text" name="prenom" placeholder="Prénom" required className="input" />
              <input type="email" name="email" placeholder="Email" required className="input" />
              <input type="password" name="password" placeholder="Mot de passe" required className="input" />

              <button type="submit" className="btn-primary">S'inscrire</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
