import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  isNotLoggedIn:boolean=false;
  admin: boolean = false;
  user:boolean=false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoggedIn =
          this.router.url !== '/admin' &&
          this.router.url !== '/admin/create-products' &&
          this.router.url !== '/admin/update-products' &&
          this.router.url !== '/admin/view-users' &&
          this.router.url !== '/settings' &&
          this.router.url !== '/user';
        this.isNotLoggedIn =
          this.router.url !== '/' &&
          this.router.url !== '/login' &&
          this.router.url !== '/register' &&
          this.router.url !== '/admin/settings' &&
          this.router.url !== '/user/settings' &&
          this.router.url !== '/**';
        this.admin =
          this.router.url !== '/admin' &&
          this.router.url !== '/admin/create-products' &&
          this.router.url !== '/admin/update-products' &&
          this.router.url !== '/admin/settings' &&
          this.router.url !== '/admin/view-users';
        this.user =
          this.router.url !== '/user' &&
          this.router.url !== '/user/settings';
      
      }
      
    });
  }

  showProductNav() {
    let modalBg = document.querySelector(
      '.prod-modal-bg-nav'
    ) as HTMLDivElement;

    modalBg?.classList.add('modal-active-nav');
  }
  closeModalNav() {
    let modalBg = document.querySelector(
      '.prod-modal-bg-nav'
    ) as HTMLDivElement;

    modalBg?.classList.remove('modal-active-nav');
  }

  showHamburgerMenu() {
    let hamburgerList = document.querySelector('.mobile') as HTMLElement;

    hamburgerList?.classList.add('mobile-menu-active');
  }
  closeHamburgerMenu() {
    let hamburgerList = document.querySelector('.mobile') as HTMLElement;

    hamburgerList?.classList.remove('mobile-menu-active');
  }
}
