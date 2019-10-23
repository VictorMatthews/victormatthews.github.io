import { Component, OnInit } from '@angular/core';
import { Ui } from '../../shared/services/ui.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {
  bioImage = 'assets/images/home/biography.jpg';

  constructor(public ui: Ui) { }

  ngOnInit() {
  }

}
