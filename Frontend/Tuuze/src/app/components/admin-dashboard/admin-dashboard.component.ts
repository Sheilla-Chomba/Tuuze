import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  showProduct() {
    let modalBg = document.querySelector('.prod-modal-bg') as HTMLDivElement;

    modalBg?.classList.add('modal-active');
  }
  closeModal() {
    let modalBg = document.querySelector('.prod-modal-bg') as HTMLDivElement;

    modalBg?.classList.remove('modal-active');
  }
}
