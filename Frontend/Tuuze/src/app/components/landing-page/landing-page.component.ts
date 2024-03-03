import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  showProduct() {
    let modalBg = document.querySelector('.prod-modal-bg') as HTMLDivElement;
    

    modalBg?.classList.add('modal-active');
  }
  closeModal(){
    let modalBg = document.querySelector('.prod-modal-bg') as HTMLDivElement;

    modalBg?.classList.remove('modal-active');
    
  }
}
