import { ComponentFixture, TestBed } from '@angular/core/testing';
import {UserMealSubscriptionComponent} from "./user-meal-subscription.component";

describe('UserMealSubscriptionComponent', () => {
  let component: UserMealSubscriptionComponent;
  let fixture: ComponentFixture<UserMealSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMealSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMealSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
