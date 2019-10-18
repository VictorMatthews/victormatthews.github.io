import {MediaMatcher} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { Component, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import {Ui} from './shared/services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  @ViewChild('menu', {static: false}) menu: MatSidenav;

  mobileQuery: MediaQueryList;
  readonly _mobileQueryListener: () => void;

  constructor(private ui: Ui, cdf: ChangeDetectorRef, media: MediaMatcher, matIconRegistry: MatIconRegistry) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => cdf.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    matIconRegistry.registerFontClassAlias('fa');
    matIconRegistry.registerFontClassAlias('fab');

    this.ui.target.subscribe(data => {
      setTimeout(() => {
        this.closeSideNav();
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  closeSideNav() {
    if (this.mobileQuery.matches) {
      this.menu.close();
    }
  }
}
