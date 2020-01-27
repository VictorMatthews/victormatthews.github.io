export class Constant {
  constructor(private val: string, private faClass?: string) {
  }

  public getString(): string {
    return this.val;
  }

  public getFaClass(): string {
    return this.faClass;
  }
}

export class Constants {
  readonly BIOGRAPHY = new Constant('Biography');
  readonly CELL = new Constant('Cell');
  readonly CONTACT = new Constant('Contact');
  readonly CONTACT_ME = new Constant('Contact Me');
  readonly DOWNLOAD_PDF_RESUME = new Constant('Download PDF version of my resume');
  readonly EMAIL = new Constant('Email');
  readonly EDUCATION = new Constant('Education');
  readonly EXPERIENCE = new Constant('Experience');
  readonly HOME = new Constant('Home');
  readonly LOCATION = new Constant('Location');
  readonly MY_EMAIL = new Constant('victormmatthews@gmail.com');
  readonly MY_FACEBOOK_URL = new Constant('https://www.facebook.com/victormmatthews');
  readonly MY_GITHUB_URL = new Constant('https://github.com/victormatthews');
  readonly MY_HACKER_RANK_URL = new Constant('https://www.hackerrank.com/victormmatthews');
  readonly MY_JOB_TITLE = new Constant('Software Engineer');
  readonly MY_LOCATION = new Constant('Denver Colorado USA');
  readonly MY_LINKEDIN_URL = new Constant('https://www.linkedin.com/in/victor-matthews-x/');
  readonly MY_NAME = new Constant('Victor Matthews');
  readonly MY_NAME_IS = new Constant('My name is');
  readonly MY_OBJECTIVE = new Constant('My Objective');
  readonly MY_PAYPAL_URL = new Constant('https://paypal.me/VictorMatthewsX');
  readonly MY_PHONE_NUMBER = new Constant('616-970-0690');
  readonly PORTFOLIO = new Constant('Portfolio');
  readonly PROFESSIONAL_SKILLS = new Constant('Professional Skills');
  readonly PROJECT_GALLERY = new Constant('Project Gallery');
  readonly RESUME = new Constant('Resume');
  readonly WORK_WITH_ME = new Constant('Interested in working with me?');
}
