import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Ui} from '../shared/services/ui.service';

@Component({
  selector: 'app-nav',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  activeEl: string = this.ui.ID.LANDING.getString();
  avatarImg: 'assets/images/victor-matthews-avatar.jpg';
  bioImage = 'assets/images/home/biography.jpg';

  constructor(public ui: Ui, private router: Router) { }

  ngOnInit() {
    const currentPath = window.location.pathname.split('/')[1];
    if (currentPath !== '') {
      this.activeEl = currentPath;
    }
  }

  scroll(id: string) {
    this.activeEl = id;
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

  navigateTo(path: string) {
    this.activeEl = path;
    this.router.navigate([path]);
    this.ui.target.next(null);
  }

  isActive(id: string) {
    if (id === this.activeEl) { return 'active'; }
  }
}
