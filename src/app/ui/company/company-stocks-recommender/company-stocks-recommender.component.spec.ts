import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStocksRecommenderComponent } from './company-stocks-recommender.component';

describe('CompanyStocksRecommenderComponent', () => {
  let component: CompanyStocksRecommenderComponent;
  let fixture: ComponentFixture<CompanyStocksRecommenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyStocksRecommenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyStocksRecommenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
