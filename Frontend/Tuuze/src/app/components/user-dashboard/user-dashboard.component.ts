import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, CommonModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
})
export class UserDashboardComponent {
  showProduct() {
    let modalBg = document.querySelector('.prod-modal-bg') as HTMLDivElement;

    modalBg?.classList.add('modal-active');
  }
  closeModal() {
    let modalBg = document.querySelector('.prod-modal-bg') as HTMLDivElement;

    modalBg?.classList.remove('modal-active');
  }
}
