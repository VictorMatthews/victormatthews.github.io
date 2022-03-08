import { Component, OnInit, ViewChild } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { Ui } from '../../shared/services/ui.service';
import { GitRepo } from './portfolio.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  repos: GitRepo[] = [];

  constructor(public ui: Ui, private portfolioService: PortfolioService) {
    this.portfolioService.projects.then(projects => this.repos = projects);
  }

  ngOnInit(): void {
  }

}
