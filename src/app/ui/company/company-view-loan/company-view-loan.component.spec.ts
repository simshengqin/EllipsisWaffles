import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyViewLoanComponent } from './company-view-loan.component';

describe('CompanyViewLoanComponent', () => {
  let component: CompanyViewLoanComponent;
  let fixture: ComponentFixture<CompanyViewLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyViewLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyViewLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
