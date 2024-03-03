import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  showProductNav() {
    let modalBg = document.querySelector('.prod-modal-bg-nav') as HTMLDivElement;

    modalBg?.classList.add('modal-active-nav');
  }
  closeModalNav() {
    let modalBg = document.querySelector('.prod-modal-bg-nav') as HTMLDivElement;

    modalBg?.classList.remove('modal-active-nav');
  }
}
