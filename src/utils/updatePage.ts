import type { Page } from "./types";
import { supabase } from "../supabaseClient";
import { debounce } from "./debounce";

export const updatPage = debounce(
  async (page: Partial<Page> & Pick<Page, "id">) => {
    await supabase.from("pages").update(page).eq("id", page.id);
  },
  500
);
