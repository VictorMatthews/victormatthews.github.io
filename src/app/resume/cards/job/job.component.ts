import { Component, Input, OnInit } from '@angular/core';
import { JobSummary } from '../../resume.interface';

@Component({
  selector: 'app-job-card',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @Input() job: JobSummary;

  constructor() { }

  ngOnInit() {
  }

}
