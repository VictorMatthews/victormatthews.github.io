import { Component, OnInit } from '@angular/core';
import { Ui } from '../shared/services/ui.service';
import { EducationSummary, JobSummary, SkillSummary } from './resume.interface';
import { ResumeService } from './resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  jobs: JobSummary[];
  educations: EducationSummary[];
  skills: SkillSummary[];

  constructor(public ui: Ui, private service: ResumeService) { }

  ngOnInit() {
    const jobCallback = (result: JobSummary[]) => {
      this.jobs = result;
    };

    const educationCallback = (result: EducationSummary[]) => {
      this.educations = result;
    };

    const skillsCallback = (result: SkillSummary[]) => {
      this.skills = result;
    };

    this.service.populateJobs(jobCallback);
    this.service.populateEducations(educationCallback);
    this.service.populateSkills(skillsCallback);
  }

}
