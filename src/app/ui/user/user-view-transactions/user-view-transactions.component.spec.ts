import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewTransactionsComponent } from './user-view-transactions.component';

describe('UserViewCompaniesComponent', () => {
  let component: UserViewTransactionsComponent;
  let fixture: ComponentFixture<UserViewTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
