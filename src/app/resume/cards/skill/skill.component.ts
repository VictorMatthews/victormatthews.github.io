import {Component, Input, OnInit} from '@angular/core';
import {SkillSummary} from '../../resume.interface';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skill: SkillSummary;

  constructor() { }

  ngOnInit() {
  }

  isProficient(level: number): string {
    return level <= this.skill.skillLevel ? 'proficient-skill' : 'non-proficient-skill';
  }
}
