import { Component, OnInit } from '@angular/core';
import {Ui} from '../shared/services/ui.service';
import {EducationSummary, JobSummary, SkillSummary} from './resume.interface';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  jobs: JobSummary[];
  educations: EducationSummary[];
  skills: SkillSummary[];

  constructor(public ui: Ui) { }

  ngOnInit() {
    this.jobs = [

      {
        duration: 'Mar 2016 - Present',
        title: 'Software Engineer',
        company: 'Gordon Food Service',
        description: 'Working with the IT Warehouse team, I have helped develop and support the warehouse management system. On a team of 14 people I played a big part in one of the most recent warehouse projects where we created and deployed a new Angular app to replace old telnet devices in the warehouses. This project updated and revamped software used throughout the entire warehouse for receiving, selection, inventory control, and shipping. I completed 22% of the 200+ bugs that came in over the 10 month roll-out of the software.',
      },
      {
        duration: 'May 2015 - Mar 2016',
        title: 'Asset Administrator',
        company: 'Gordon Food Service',
        description: 'Working with the North American Asset Management team. I automated the internal hardware & software PO request system, resulting in our team winning the J&P Cup award that year.',
      },
      {
        duration: 'Sept 2013 - May 2015',
        title: 'Sales Associate',
        company: 'Gordon Food Service',
        description: 'Working at the GFS Store in Cascade, MI',
      },
    ];

    this.educations = [
      {
        title: 'B.S. Digital Media Software Engineering',
        duration: '2013-2017',
        institution: 'Ferris State University',
        location: 'Grand Rapids, MI',
      },
    ];

    this.skills = [
      {
        skillName: 'Java',
        skillLevel: 5,
      },
      {
        skillName: 'SQL',
        skillLevel: 5,
      },
      {
        skillName: 'Angular',
        skillLevel: 4,
      },
      {
        skillName: 'Javascript/TypeScript',
        skillLevel: 4,
      },
      {
        skillName: 'Git',
        skillLevel: 4,
      },
      {
        skillName: 'HTML',
        skillLevel: 3,
      },
      {
        skillName: 'CSS',
        skillLevel: 3,
      },
      {
        skillName: 'Node.js',
        skillLevel: 3,
      },
      {
        skillName: 'Spring',
        skillLevel: 3,
      },
      {
        skillName: 'Maven',
        skillLevel: 3,
      },
    ];
  }

}
