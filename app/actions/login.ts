"use server";

import { supabase } from "@/utils/supabaseClient";

export async function Login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Vérification des champs non vides
  if (!email || !password) {
    return { error: "Email et mot de passe sont requis" };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // Vérification d'une erreur d'authentification
  if (error) {
    return { error: error.message };
  }

  // Retour des données de l'utilisateur si tout se passe bien
  return { data };
}