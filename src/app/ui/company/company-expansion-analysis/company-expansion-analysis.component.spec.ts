import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExpansionAnalysisComponent } from './company-expansion-analysis.component';

describe('CompanyExpansionAnalysisComponent', () => {
  let component: CompanyExpansionAnalysisComponent;
  let fixture: ComponentFixture<CompanyExpansionAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyExpansionAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExpansionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
