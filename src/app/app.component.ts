import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { Component, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { Ui } from './shared/services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  @ViewChild('menu') menu: MatSidenav;

  constructor(public ui: Ui, private router: Router, cdf: ChangeDetectorRef, media: MediaMatcher, matIconRegistry: MatIconRegistry) {

    matIconRegistry.registerFontClassAlias('fa');
    matIconRegistry.registerFontClassAlias('fab');

    this.ui.target.subscribe(data => {
      setTimeout(() => {
        this.closeSideNav();
      }, 1000);
    });
  }

  ngOnDestroy(): void {
  }

  closeSideNav() {
    if (this.ui.isMobile()) {
      this.menu.close();
    }
  }

  showMenu() {
    return !['/beer-fund'].includes(this.router.url);
  }
}
