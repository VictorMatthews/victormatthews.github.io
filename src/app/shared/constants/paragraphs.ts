export class Paragraph {
  constructor(private val: string) {
  }

  public getString(): string {
    return this.val;
  }
}

export class Paragraphs {
  readonly BIO_P1 = new Paragraph('I first started programming in college with the intention of going into video game development. Although I still have a passion for video games I do not believe I want to work on them for a living.');
  readonly BIO_P2 = new Paragraph('I have attained knowledge in the full stack of development in my current role at Gordon Food Service. I am apart of the IT Warehouse team where I help develop and support warehouse management software.');
  readonly BIO_P3 = new Paragraph('In my spare time, if I\'m not binge watching TV or playing video games, you can find me at craft breweries or hiking around Colorado.');

  readonly CONTACT_P1 = new Paragraph('If you need help with a project or have a job opportunity? Send me an email.');

  readonly LANDING_P1 = new Paragraph('I am a Denver based software engineer who has professional experience with Angular, NodeJS, Java, Javasript/TypeScript, SQL, HTML 5 and CSS');

  readonly PORTFOLIO_P1 = new Paragraph('Here are my github repos');

  readonly RESUME_OBJECTIVE = new Paragraph('Continually grow my knowledge in all areas of programming. I have a new found passion for the web space, but I really enjoy Java and working on back-ends. My next goal in life is to rid the world of web apps not designed for the color blind.');
}
