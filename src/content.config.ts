import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import profileData from './content/profile/index.js';

/**
 * `profile` is the single source of truth for all site copy and structured
 * data. A personal site has exactly one identity, so this collection holds a
 * single document (`src/content/profile/index.ts`).
 *
 * It is a Content Layer collection with a custom loader (not a `type: 'data'`
 * glob collection) on purpose: Astro's default `type: 'data'` loader only
 * parses `json/yaml/yml/toml`, so a `.ts` module is never picked up (it warns
 * "No files matching ... in directory src/content/profile"). The loader below
 * imports the TS module directly and hands its data to Astro, which still
 * validates it against the Zod schema below — so consumers get fully typed,
 * schema-checked data.
 *
 * Consumers (later steps):
 *   - Home (Step 4): `bio`, `landing`, `socials`, and the contact fields
 *     (`name`, `title`, `location`, `email`, `phone`).
 *   - Resume (Step 5): `experience`, `education`, `skills`, `resumePdf`, `objective`.
 *
 * `socials[].icon` is a semantic identifier (e.g. `"github"`, `"linkedin"`).
 * The UI layer maps it to whatever icon set the site uses — keep it free of any
 * specific icon-font assumptions so the choice stays decoupled from the copy.
 *
 * Contact/socials live here once on purpose, so the Header (Step 4) and Footer
 * can reuse the same values instead of duplicating them.
 */
const profile = defineCollection({
  loader: async () => {
    return { "main": profileData };
  },
  schema: z.object({
    name: z.string(),
    title: z.string(),
    location: z.string(),
    email: z.string(),
    phone: z.string(),
    bio: z.array(z.string()),
    landing: z.string(),
    socials: z.array(
      z.object({
        label: z.string(),
        url: z.string(),
        icon: z.string(),
      }),
    ),
    experience: z.array(
      z.object({
        company: z.string(),
        title: z.string(),
        duration: z.string(),
        bullets: z.array(z.string()),
      }),
    ),
    education: z.array(
      z.object({
        title: z.string(),
        institution: z.string(),
        location: z.string(),
        duration: z.string(),
      }),
    ),
    skills: z.array(
      z.object({
        name: z.string(),
        level: z.number().min(1).max(5),
      }),
    ),
    resumePdf: z.string(),
    objective: z.string(),
  }),
});

export const collections = { profile };
