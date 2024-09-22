import { Component, OnInit } from '@angular/core';
import { Ui } from '../../shared/services/ui.service';
import {Paragraph} from '../../shared/constants/paragraphs';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {
  bioImage = 'assets/images/home/biography.jpg';
  paragraphs: Paragraph[] = [];

  constructor(public ui: Ui) { }

  ngOnInit() {
    this.paragraphs = [
      this.ui.PARAGRAPHS.BIO_P1,
      this.ui.PARAGRAPHS.BIO_P2,
      this.ui.PARAGRAPHS.BIO_P3,
      this.ui.PARAGRAPHS.BIO_P4,
    ];
  }

}
