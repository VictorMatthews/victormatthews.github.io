import { Injectable } from '@angular/core';
import { ExternalLink, NavigationConstants, NavigationLink } from './menu.interface';
import { Ui } from '../shared/services/ui.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(public ui: Ui) { }

  populateNavigationLinks(callback: (result: NavigationLink[]) => void) {
      callback(
        [
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
        ]
      );
  }

  populateExternalLinks(callback: (result: ExternalLink[]) => void) {
    callback(
      [
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
          url: this.ui.CONSTANTS.MY_HACKER_RANK_URL.getString(),
          fontSet: 'fab',
          fontIcon: 'fa-hackerrank',
          label: 'HackerRank',
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
      ]
    );
  }
}
