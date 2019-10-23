import { Component, Input, OnInit } from '@angular/core';
import { GitRepo } from '../../portfolio.interface';
import { Ui } from '../../../../shared/services/ui.service';

@Component({
  selector: 'app-git-repo',
  templateUrl: './git-repo.component.html',
  styleUrls: ['./git-repo.component.scss']
})
export class GitRepoComponent implements OnInit {
  @Input() repo: GitRepo;

  constructor(public ui: Ui) { }

  ngOnInit() {
  }

}
