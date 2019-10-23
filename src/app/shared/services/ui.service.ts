import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';
import { Paragraphs } from '../constants/paragraphs';
import { Ids } from '../constants/ids';
import { Subject } from 'rxjs';
import { UiUtil } from './ui-util';

@Injectable({
  providedIn: 'root'
})
export class Ui {
  CONSTANTS = new Constants();
  PARAGRAPHS = new Paragraphs();
  ID = new Ids();
  target = new Subject();

  constructor() {
    this.target.subscribe( id => {
      if (id != null) {
        this.scroll(id as string);
      }
    });
  }

  public scroll(id: string) {
    const el = document.getElementsByClassName(id).item(0);
    el.scrollIntoView({behavior: 'smooth'});
  }

  getMailToLink(): string {
    return 'mailto:' + this.CONSTANTS.MY_EMAIL.getString();
  }

  isMobile(): boolean {
    return !UiUtil.isDesktop();
  }


}
