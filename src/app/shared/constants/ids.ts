export class Id {
  constructor(private val: string) {
  }

  public getString(): string {
    return this.val;
  }
}

export class Ids {
  readonly BIOGRAPHY = new Id('biography');
  readonly CONTACT = new Id('contact');
  readonly LANDING = new Id('landing');
  readonly PORTFOLIO = new Id('portfolio');
  readonly RESUME = new Id('/resume');
}
