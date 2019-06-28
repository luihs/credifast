import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCajerosComponent } from './inicio-cajeros.component';

describe('InicioCajerosComponent', () => {
  let component: InicioCajerosComponent;
  let fixture: ComponentFixture<InicioCajerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioCajerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioCajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
