import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioModalsComponent } from './portfolio-modals.component';

describe('PortfolioModalsComponent', () => {
  let component: PortfolioModalsComponent;
  let fixture: ComponentFixture<PortfolioModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioModalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
