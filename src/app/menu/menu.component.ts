import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Ui} from '../shared/services/ui.service';
import {ExternalLink, NavigationConstants, NavigationLink} from './menu.interface';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-nav',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  activeEl: string = this.ui.ID.LANDING.getString();
  avatarImg: 'assets/images/victor-matthews-avatar.jpg';
  bioImage = 'assets/images/home/biography.jpg';
  navigationLinks: NavigationLink[];
  externalLinks: ExternalLink[];

  constructor(public ui: Ui, private router: Router) { }

  ngOnInit() {
    const currentPath = window.location.pathname.split('/')[1];
    if (currentPath !== '') {
      this.activeEl = currentPath;
    }
    this.populateLinks();
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

  populateLinks() {
    this.navigationLinks = [
      {
        path: this.ui.ID.LANDING.getString(),
        navType: NavigationConstants.SCROLL,
        className: 'landing-link',
        fontSet: 'fa',
        fontIcon: 'fa-home',
        label: this.ui.CONSTANTS.HOME.getString(),
      },
      {
        path: this.ui.ID.PORTFOLIO.getString(),
        navType: NavigationConstants.SCROLL,
        className: 'portfolio-link',
        fontSet: 'fa',
        fontIcon: 'fa-th',
        label: this.ui.CONSTANTS.PORTFOLIO.getString(),
      },
      {
        path: this.ui.ID.BIOGRAPHY.getString(),
        navType: NavigationConstants.SCROLL,
        className: 'biography-link',
        fontSet: 'fa',
        fontIcon: 'fa-user',
        label: this.ui.CONSTANTS.BIOGRAPHY.getString(),
      },
      {
        path: this.ui.ID.CONTACT.getString(),
        navType: NavigationConstants.SCROLL,
        className: 'contact-link',
        fontSet: 'fa',
        fontIcon: 'fa-envelope',
        label: this.ui.CONSTANTS.CONTACT.getString(),
      },
      {
        path: this.ui.ID.RESUME.getString(),
        navType: NavigationConstants.NAVIGATE_TO,
        className: 'resume-link',
        fontSet: 'fa',
        fontIcon: 'fa-file',
        label: this.ui.CONSTANTS.RESUME.getString(),
      },
    ];

    this.externalLinks = [
      {
        url: this.ui.CONSTANTS.MY_LINKEDIN_URL.getString(),
        fontSet: 'fab',
        fontIcon: 'fa-linkedin',
        label: 'LinkedIn',
      },
      {
        url: this.ui.CONSTANTS.MY_GITHUB_URL.getString(),
        fontSet: 'fab',
        fontIcon: 'fa-github',
        label: 'GitHub',
      },
      {
        url: this.ui.CONSTANTS.MY_PAYPAL_URL.getString(),
        fontSet: 'fab',
        fontIcon: 'fa-paypal',
        label: 'Paypal',
      },
      {
        url: this.ui.CONSTANTS.MY_FACEBOOK_URL.getString(),
        fontSet: 'fab',
        fontIcon: 'fa-facebook-square',
        label: 'Facebook',
      },
      {
        url: this.ui.getMailToLink(),
        fontSet: 'fa',
        fontIcon: 'fa-envelope',
        label: 'Email',
      },
    ];
  }
}
