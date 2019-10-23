import { Component, OnInit, VERSION } from '@angular/core';
import { Ui } from '../shared/services/ui.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear = (new Date()).getFullYear();
  angularVersion = VERSION.major;

  constructor(public ui: Ui) { }

  ngOnInit() {
  }

}
