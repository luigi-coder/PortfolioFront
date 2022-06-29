import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEstaticoComponent } from './portfolio-estatico.component';

describe('PortfolioEstaticoComponent', () => {
  let component: PortfolioEstaticoComponent;
  let fixture: ComponentFixture<PortfolioEstaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioEstaticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioEstaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
