import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCreateLoanComponent } from './company-create-loan.component';

describe('CompanyCreateLoanComponent', () => {
  let component: CompanyCreateLoanComponent;
  let fixture: ComponentFixture<CompanyCreateLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCreateLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCreateLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
