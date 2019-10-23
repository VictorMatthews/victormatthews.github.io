import { Component, OnInit } from '@angular/core';
import { Ui } from '../../shared/services/ui.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public ui: Ui) { }

  ngOnInit() {
  }

}
