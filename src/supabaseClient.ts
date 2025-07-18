import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

if (!supabaseKey || supabaseUrl) {
  throw new Error("Missing supabase URL or Key");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
