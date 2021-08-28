import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyViewLoansComponent } from './company-view-loans.component';

describe('CompanyViewLoansComponent', () => {
  let component: CompanyViewLoansComponent;
  let fixture: ComponentFixture<CompanyViewLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyViewLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyViewLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
