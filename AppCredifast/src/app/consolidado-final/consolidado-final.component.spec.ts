import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidadoFinalComponent } from './consolidado-final.component';

describe('ConsolidadoFinalComponent', () => {
  let component: ConsolidadoFinalComponent;
  let fixture: ComponentFixture<ConsolidadoFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidadoFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidadoFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
