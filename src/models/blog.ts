import type { CollectionEntry } from "astro:content";

export type BlogMeta = CollectionEntry<"blog">["data"];
export type Blog = CollectionEntry<"blog">;
