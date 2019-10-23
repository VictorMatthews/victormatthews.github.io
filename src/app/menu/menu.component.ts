import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ui } from '../shared/services/ui.service';
import { ExternalLink, NavigationConstants, NavigationLink } from './menu.interface';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  activeEl: string = this.ui.ID.LANDING.getString();
  avatarImg: 'assets/images/victor-matthews-avatar.jpg';
  navigationLinks: NavigationLink[];
  externalLinks: ExternalLink[];

  constructor(public ui: Ui, private router: Router, private service: MenuService) { }

  ngOnInit() {
    const currentPath = window.location.pathname.split('/')[1];
    if (currentPath !== '') {
      this.activeEl = currentPath;
    }

    const navigationLinkCallback = (result: NavigationLink[]) => {
      this.navigationLinks = result;
    };

    const externalLinkCallback = (result: ExternalLink[]) => {
      this.externalLinks = result;
    };

    this.service.populateNavigationLinks(navigationLinkCallback);
    this.service.populateExternalLinks(externalLinkCallback);
  }

  scroll(id: string) {
    if (this.router.url !== '/') {
      this.router.navigate(['']);
      setTimeout(() => {
        this.ui.scroll(id);
        this.ui.target.next(null);
      }, 1000);
    } else {
      this.ui.scroll(id);
      this.ui.target.next(null);
    }
  }

  navigateTo(path: string, navType: string) {
    this.activeEl = path;
    if (navType === NavigationConstants.SCROLL) {
      this.scroll(path);
    } else if (navType === NavigationConstants.NAVIGATE_TO) {
      this.router.navigate([path]);
      this.ui.target.next(null);
    }
  }

  isActive(id: string) {
    if (id === this.activeEl) { return 'active'; }
  }
}
