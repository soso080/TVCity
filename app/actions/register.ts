"use server";

import { supabase } from "@/utils/supabaseClient";

export async function Register(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const nom = formData.get("nom") as string;
  const prenom = formData.get("prenom") as string;

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

  if (error) {
    return { error: error.message };
  }

  return { data };
}