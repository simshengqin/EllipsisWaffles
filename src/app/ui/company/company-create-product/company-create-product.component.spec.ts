import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCreateProductComponent } from './company-create-product.component';

describe('UserViewCompaniesComponent', () => {
  let component: CompanyCreateProductComponent;
  let fixture: ComponentFixture<CompanyCreateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCreateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
