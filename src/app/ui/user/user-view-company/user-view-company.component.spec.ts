import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewCompanyComponent } from './user-view-company.component';

describe('UserViewCompaniesComponent', () => {
  let component: UserViewCompanyComponent;
  let fixture: ComponentFixture<UserViewCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
