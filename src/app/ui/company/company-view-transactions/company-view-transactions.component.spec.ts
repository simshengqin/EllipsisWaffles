import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyViewTransactionsComponent } from './company-view-transactions.component';

describe('CompanyViewTransactionsComponent', () => {
  let component: CompanyViewTransactionsComponent;
  let fixture: ComponentFixture<CompanyViewTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyViewTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyViewTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
