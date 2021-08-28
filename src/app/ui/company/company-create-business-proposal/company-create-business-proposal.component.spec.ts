import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCreateBusinessProposalComponent } from './company-create-business-proposal.component';

describe('CompanyCreateBusinessProposalComponent', () => {
  let component: CompanyCreateBusinessProposalComponent;
  let fixture: ComponentFixture<CompanyCreateBusinessProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCreateBusinessProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCreateBusinessProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
