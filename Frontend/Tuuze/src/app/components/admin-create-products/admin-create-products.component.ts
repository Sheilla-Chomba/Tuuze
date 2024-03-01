import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-admin-create-products',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './admin-create-products.component.html',
  styleUrl: './admin-create-products.component.css'
})
export class AdminCreateProductsComponent {

}
