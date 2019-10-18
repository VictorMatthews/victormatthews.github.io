import { Component, OnInit, ViewChild, AfterContentInit, OnDestroy } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { PortfolioService } from './portfolio.service';
import {Ui} from '../../shared/services/ui.service';
import {GitRepo} from './portfolio.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnDestroy, AfterContentInit, OnInit {

  watcher: Subscription;

  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 2,
    sm: 1,
    xs: 1
  };

  repos: GitRepo[] = [];

  @ViewChild('grid', {static: false}) grid: MatGridList;

  constructor(public ui: Ui, private mediaObserver: MediaObserver, private portfolioService: PortfolioService) {
    this.portfolioService.projects.then(projects => this.repos = projects);
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.watcher = this.mediaObserver.media$.subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

}
