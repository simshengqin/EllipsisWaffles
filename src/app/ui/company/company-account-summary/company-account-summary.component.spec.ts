import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAccountSummaryComponent } from './company-account-summary.component';

describe('CompanyAccountSummaryComponent', () => {
  let component: CompanyAccountSummaryComponent;
  let fixture: ComponentFixture<CompanyAccountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAccountSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
