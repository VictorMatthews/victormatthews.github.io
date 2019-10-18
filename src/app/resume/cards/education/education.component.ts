import {Component, Input, OnInit} from '@angular/core';
import {EducationSummary} from '../../resume.interface';

@Component({
  selector: 'app-education-card',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() education: EducationSummary;

  constructor() { }

  ngOnInit() {
  }

}
