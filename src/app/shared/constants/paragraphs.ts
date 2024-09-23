export class Paragraph {
  val: string

  constructor(private valList: string[]) {
    this.val = valList.join(' ')
  }

  public getString(): string {
    return this.val;
  }
}

export class Paragraphs {
  readonly BIO_P1 = new Paragraph(['I first started programming in college with the intention of going into video game development.',
    'Although I still have a passion for video games I do not believe I want to work on them for a living.']);

  readonly BIO_P2 = new Paragraph(['I started my career at Gordon Food Service working in on of their stores in the greater Grand Rapids area.',
    'I quickly became a reliable employee, and first on the list for managers to call if someone called in sick. Corporate would occasionally',
    'send in someone to the store, to get a feel for how they operated and to also gauge if there were any improvements that could be made. A',
    'little over a year of working in the store someone from corporate got paired with me for a day. We got to chatting and I found out he was',
    'a team manager for the team that develops all the software used in the stores. I let him know I was currently working on my degree for',
    'software engineering, and exchanged emails. After emailing back and forth I was able to land a job as an asset administrator. Where my',
    'main task was to find ways to innovate their current process\'. I found a way to improve on the internal hardware/software PO request form',
    'used throughout IT. I removed multiple manual steps and simplifying the overall process of both the requester and the asset admin who had',
    'to process the PO. A little under a year on that team, I saw an opening on the IT Warehouse team for a software engineer. Even though I was',
    'still working on my degree, I applied for the position. I stood out as a strong candidate and landed that position. During my time on that',
    'team I have attained knowledge in the full stack of development, by helping to both develop and maintain the warehouse management software.']);

  readonly BIO_P3 = new Paragraph(['In 2021 I started working for Boeing, where I quickly became the go to engineer for Angular projects.',
    'Even though I was hired for a backend position, on day one I was asked to help out another team finish up an Angular app due to my',
    'previous experience. After helping finish that application, I was asked to lead 2 other Angular projects. In the fall of 2023 I was', 
    'able go to the team that hired me, Using Python and DataBricks, I created a workflow to improve the aeronautical data extract for', 
    'faster delivery of data to our customers.']);

  readonly BIO_P4 = new Paragraph(['In my spare time you can find me brewing my own beer or adventuring out to craft breweries and hiking around',
    'Colorado, that is when I\'m not deeply immersed in a video game.']);

readonly CONTACT_P1 = new Paragraph(['If you need help with a project or have a job opportunity? Send me an email.']);

  readonly LANDING_P1 = new Paragraph(['I am a Denver based software engineer who has professional experience with Python, Angular, NodeJS, Java,',
    'TypeScript/JavaScript, SQL, HTML 5 and CSS']);

  readonly PORTFOLIO_P1 = new Paragraph(['Here are my github repos']);

  readonly RESUME_OBJECTIVE = new Paragraph(['Continually grow my knowledge in all areas of programming. I have a new found',
    'passion for the web space, but my preference still lies on backends. My next goal in life is to rid the world',
    'of web apps not designed for the color blind.']);
}
