/**
 * The single `profile` document — every piece of site copy and structured data
 * lives here. Edit copy in this one place; every page reads it via
 * `getEntry('profile', 'main')`.
 *
 * NOTE ON AUTHORING
 * -----------------
 * `landing`, `bio`, and `objective` are written from the migration plan's
 * summaries, because the original Angular source text (constants.ts /
 * paragraphs.ts / resume.service.ts) no longer exists. Read them over and fix
 * any wording that doesn't match how you want to say it — the structure is
 * correct, the prose is a best-effort reconstruction.
 *
 * The current role is **Jeppesen ForeFlight** (per career_profile.md). The old
 * site said "Boeing"; that was a stale job title and must NOT ship.
 */

export default {
  // ---- Identity / contact (Header + Footer reuse these) ----
  name: 'Victor Matthews',
  title: 'Senior Software Engineer',
  location: 'Denver, Colorado, USA',
  email: 'victormmatthews@gmail.com',
  phone: '616-970-0690',

  // ---- Landing / bio (Home hero + about) ----
  // AUTHORED FOR REVIEW — reconstructed from the plan; not verbatim original.
  landing:
    'Denver-based senior software engineer building data pipelines, APIs, and ' +
    'the configuration tools that power them. I work across Python, Angular, ' +
    'Node.js, Java, TypeScript/JavaScript, SQL, HTML5, and CSS — most of my ' +
    'recent work is in aviation data engineering, where correctness and ' +
    'integrity matter more than raw speed.',

  // AUTHORED FOR REVIEW — four-paragraph arc reconstructed from the plan.
  bio: [
    'I started out building video games. That early, scrappy habit — ' +
    'prototyping quickly, shipping something you can actually play with — ' +
    'stuck with me long after I moved on to production software.',
    'I joined Gordon Food Service, where I built a warehouse management system ' +
    'from the ground up: I was the subject-matter engineer for Inventory and ' +
    'Material Handling, and I led the effort to replace their old telnet-based ' +
    'devices with a modern Angular application covering receiving, selection, ' +
    'inventory, and shipping.',
    'Today I work in data engineering on the Jeppesen ForeFlight team, building ' +
    'the high-integrity data pipelines and APIs that feed aviation software. ' +
    'A Python + DataBricks extraction cut delivery time roughly 100x, and I ' +
    'also build the Angular configuration UIs that airline and business ' +
    'customers use to define their data. Part of that work automates the ' +
    'labeling and deconfliction of airport maps — deconflicting roughly 75% of ' +
    'the airport library, which powers Jeppesen Airport Moving Maps and ' +
    'ForeFlight.',
    'Away from the keyboard I am a hobbyist brewer, hiker, and gamer — and I ' +
    'run a small "beer fund" to keep the brewing supplies coming in.',
  ],

  // ---- Socials (icon = semantic id; the UI maps it to a real icon) ----
  socials: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/victor-matthews-x/',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/victormatthews',
      icon: 'github',
    },
    {
      label: 'HackerRank',
      url: 'https://www.hackerrank.com/victormmatthews',
      icon: 'hackerrank',
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/victormmatthews',
      icon: 'facebook',
    },
  ],

  // ---- Experience (Resume) ----
  // Current role corrected to Jeppesen ForeFlight. NOTE: the plan lists the
  // customer config UIs as "Angular"; career_profile.md mentions React. The UI
  // technology here follows the migration plan — reconcile if it should be React.
  experience: [
    {
      company: 'Jeppesen ForeFlight',
      title: 'Senior Software Engineer',
      duration: 'May 2021 – Present',
      bullets: [
        'Build and maintain high-integrity data pipelines and APIs that feed ' +
          'Jeppesen ForeFlight and related aviation products.',
        'Rebuilt an extraction pipeline in Python + DataBricks, cutting delivery ' +
          'time roughly 100x compared to the previous process.',
        'Build the Angular configuration UIs that airline and business ' +
          'customers use to define and manage their data.',
        'Automated the labeling and deconfliction of airport maps, removing ' +
          'about 75% of manual work across the airport library and powering ' +
          'Jeppesen Airport Moving Maps and ForeFlight.',
      ],
    },
    {
      company: 'Gordon Food Service',
      title: 'Software Engineer',
      duration: 'Mar 2016 – May 2021',
      bullets: [
        'Built a warehouse management system as the subject-matter engineer for ' +
          'Inventory and Material Handling.',
        'Led the migration off legacy telnet-based devices onto a modern Angular ' +
          'application.',
        'Implemented the receiving, selection, inventory, and shipping modules ' +
          'that run the warehouse floor.',
      ],
    },
    {
      company: 'Gordon Food Service',
      title: 'Asset Administrator',
      duration: 'May 2015 – Mar 2016',
      bullets: [
        'Automated the purchase-order request system in JavaScript, including ' +
          'form-field validation to keep the data clean at the source.',
        'Recognized with a J&P Cup award for the automation work.',
      ],
    },
    {
      company: 'Gordon Food Service',
      title: 'Sales Associate',
      duration: 'Sep 2013 – May 2015',
      bullets: [
        'Started as a Sales Associate at the GFS store in Cascade, Michigan, ' +
          'which is where I found the company and moved into software.',
      ],
    },
  ],

  // ---- Education (Resume) ----
  education: [
    {
      title: 'B.S. Digital Media Software Engineering',
      institution: 'Ferris State University',
      location: 'Grand Rapids, MI',
      duration: '2013 – 2017',
    },
  ],

  // ---- Skills (Resume) — level on a 1–5 scale ----
  skills: [
    { name: 'Python', level: 5 },
    { name: 'Java', level: 5 },
    { name: 'SQL', level: 5 },
    { name: 'Angular', level: 4 },
    { name: 'TypeScript / JavaScript', level: 4 },
    { name: 'Git', level: 4 },
    { name: 'HTML', level: 3 },
    { name: 'CSS', level: 3 },
    { name: 'Node.js', level: 3 },
  ],

  // ---- Resume ----
  resumePdf: '/documents/victormatthews_Resume.pdf',

  // AUTHORED FOR REVIEW — short objective line for the resume header.
  objective:
    'Senior software engineer focused on data integrity and customer-facing ' +
    'tooling. I like building the pipelines and systems that let other people ' +
    'do their jobs faster and more reliably — and the small, delightful ' +
    'products I make for myself along the way.',
} as const;
