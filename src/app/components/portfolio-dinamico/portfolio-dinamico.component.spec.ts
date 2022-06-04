import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDinamicoComponent } from './portfolio-dinamico.component';

describe('PortfolioDinamicoComponent', () => {
  let component: PortfolioDinamicoComponent;
  let fixture: ComponentFixture<PortfolioDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDinamicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
