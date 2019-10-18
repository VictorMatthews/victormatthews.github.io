import {Component, Input, OnInit} from '@angular/core';
import {GitRepo} from '../../portfolio.interface';

@Component({
  selector: 'app-git-repo',
  templateUrl: './git-repo.component.html',
  styleUrls: ['./git-repo.component.scss']
})
export class GitRepoComponent implements OnInit {
  @Input() repo: GitRepo;

  constructor() { }

  ngOnInit() {
  }

}
