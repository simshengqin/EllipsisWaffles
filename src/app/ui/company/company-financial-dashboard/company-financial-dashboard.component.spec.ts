import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFinancialDashboardComponent } from './company-financial-dashboard.component';

describe('CompanyFinancialDashboardComponent', () => {
  let component: CompanyFinancialDashboardComponent;
  let fixture: ComponentFixture<CompanyFinancialDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyFinancialDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFinancialDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
