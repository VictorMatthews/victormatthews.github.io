import { Component, OnInit } from '@angular/core';
import { Ui } from '../../shared/services/ui.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public ui: Ui) { }

  ngOnInit() {
  }

  getLandingInfo(): string {
    return this.ui.CONSTANTS.MY_NAME_IS.getString() + ' ' + this.ui.CONSTANTS.MY_NAME.getString() + '. ' + this.ui.PARAGRAPHS.LANDING_P1.getString();
  }

}
