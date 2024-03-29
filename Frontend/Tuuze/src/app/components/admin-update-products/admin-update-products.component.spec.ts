import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateProductsComponent } from './admin-update-products.component';

describe('AdminUpdateProductsComponent', () => {
  let component: AdminUpdateProductsComponent;
  let fixture: ComponentFixture<AdminUpdateProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUpdateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
