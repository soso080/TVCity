"use server";

import { supabase } from "@/utils/supabaseClient";

export async function Register(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const nom = formData.get("nom") as string;
  const prenom = formData.get("prenom") as string;

  // Vérification des champs non vides
  if (!email || !password || !nom || !prenom) {
    return { error: "Tous les champs sont requis" };
  }

  // Exemple de validation du mot de passe : au moins 8 caractères
  if (password.length < 8) {
    return { error: "Le mot de passe doit contenir au moins 8 caractères" };
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nom,
        prenom,
      },
    },
  });

  // Gestion des erreurs Supabase
  if (error) {
    return { error: error.message };
  }

  // Retour des données si l'inscription est réussie
  return { data };
}
