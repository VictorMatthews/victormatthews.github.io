/**
 * The single `profile` document — every piece of site copy and structured data
 * lives here. Edit copy in this one place; every page reads it via
 * `getEntry('profile', 'main')`.
 */

export default {
  // ---- Identity / contact (Header + Footer reuse these) ----
  name: 'Victor Matthews',
  title: 'Senior Software Engineer',
  location: 'Denver, Colorado, USA',
  email: 'victormmatthews@gmail.com',
  phone: '616-970-0690',

  // ---- Landing / bio (Home hero + about) ----
  landing:
    'I am a Senior Software Engineer on the Data Engineering - Foundations team ' + 
      'at Jeppesen ForeFlight, where I build the high-integrity pipelines and APIs ' + 
      'that transform raw data into critical navigation content for pilots. Operating ' + 
      'in a safety-critical domain, I ensure that the data informing aircraft guidance ' + 
      'and terminal operations is correct and verifiable, treating reliability as a ' + 
      'first-class citizen alongside system throughput.',

  bio: [
    'I\'m a firm believer that life is best lived in balance: a little bit of grit, a ' +
      'little bit of cozy, and a lot of really great beer.',

    'My main obsession is brewing. I\'ve been crafting my own brews since 2020, and I\'ve ' +
      'spent the last few years testing my skills in competitions. While I have a deep-seated ' +
      'love for German Lagers, I\'m always experimenting with new styles to see what sticks.',

    'For my \'recharge\' time, I lean into the simple things: casual hikes, immersive RPGs, ' +
      'and a good book. I\'m a sucker for a good story, especially if it\'s a dystopian ' +
      'one, and I\'m never not searching for a perfectly balanced Munich Helles.',
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
  ],

  // ---- Experience (Resume) ----
  experience: [
    {
      company: 'Jeppesen ForeFlight',
      title: 'Senior Software Engineer',
      duration: 'Nov 2025 - Present',
      bullets: [
        'Build and maintain high-integrity data pipelines and APIs that feed ' +
          'the ForeFlight EFB.',
        'Build and maintain React apps used for validating and maintaining ' +
          'aviation data across multiple domains and sources.',
        'Automated the labeling and deconfliction of airport maps, removing ' +
          '75% of manual work across the airport library and powering ' +
          'Jeppesen Airport Moving Maps and ForeFlight.',
      ],
    },
    {
      company: 'Boeing',
      title: 'Senior Software Engineer',
      duration: 'May 2021 - Nov 2025',
      bullets: [
        'Build and maintain high-integrity data pipelines and APIs that feed ' +
          'aviation products.',
        'Rebuilt a data extraction pipeline in Python + DataBricks, cutting delivery ' +
          'time over 100x compared to the previous process.',
        'Built the Angular configuration UIs that airline and business ' +
          'customers use to define and manage their data.',
      ],
    },
    {
      company: 'Gordon Food Service',
      title: 'Software Engineer',
      duration: 'Mar 2016 - May 2021',
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
      duration: 'May 2015 - Mar 2016',
      bullets: [
        'Automated the purchase-order request system in JavaScript, including ' +
          'form-field validation to keep the data clean at the source.',
        'Recognized with a J&P Cup award for the automation work.',
      ],
    },
    {
      company: 'Gordon Food Service',
      title: 'Sales Associate',
      duration: 'Sep 2013 - May 2015',
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
      duration: '2013 - 2017',
    },
  ],

  // ---- Resume (Download) ----
  resumePdf: '/documents/victormatthews_Resume.pdf',

  objective:
    'Senior software engineer that thrives in environments where engineering ' +
      'rigor is paramount and the stakes are high. I am driven by the challenge ' +
      'of building systems where "correctness" is non-negotiable and a small ' +
      'mistake has real-world consequences.',

  beerFund: {
    blurb:
      'I\'m an award winning home brewer, and this is where the supplies come from. ' +
      'Drop in a few dollars whenever a fresh batch hits the tap and it goes ' +
      'straight to the next one. Thanks for the tips!',
    avatar: '/images/beer-fund-avatar.jpg',
    buttons: [
      {
        label: 'PayPal',
        url: 'https://www.paypal.com/paypalme/VictorMatthewsX?locale.x=en_US',
      },
      {
        label: 'Venmo',
        url: 'https://www.venmo.com/VictorMatthewsX',
      },
      {
        label: 'Cash App',
        url: 'https://cash.app/%24VictorMatthewsX',
      },
    ],
  },
} as const;
