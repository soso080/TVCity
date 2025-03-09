import React, { useState } from "react";
import { supabase } from "@/utils/supabaseClient";

interface FormData {
  email: string;
  object: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    object: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { error } = await supabase.from("contact").insert([{ ...formData }]);
      if (error) throw error;
      setSuccess(true);
      setFormData({ email: "", object: "", message: "" });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contactez Nous</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Vous avez un problème technique ? Vous souhaitez envoyer des commentaires sur une fonctionnalité bêta ?
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
              placeholder="exemple@xyz.com"
            />
          </div>

          <div>
            <label htmlFor="object" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Objet
            </label>
            <input
              type="text"
              id="object"
              value={formData.object}
              onChange={handleChange}
              required
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
              placeholder="Faites-nous savoir comment nous pouvons vous aider"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Laissez un commentaire..."
            ></textarea>
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Message envoyé avec succès !</p>}

          <button
            type="submit"
            disabled={loading}
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
}