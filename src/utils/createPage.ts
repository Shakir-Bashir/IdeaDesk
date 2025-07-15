import { nanoid } from "nanoid";
import type { Page } from "./types";

export const createPage = () => {
  const slug = nanoid();
  const id = nanoid();

  const page: Page = {
    title: "untitled",
    id,
    slug,
    nodes: [],
    cover: "Ztm-cove.png",
  };

  return page;
};
