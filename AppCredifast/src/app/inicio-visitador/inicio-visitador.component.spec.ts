import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioVisitadorComponent } from './inicio-visitador.component';

describe('InicioVisitadorComponent', () => {
  let component: InicioVisitadorComponent;
  let fixture: ComponentFixture<InicioVisitadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioVisitadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioVisitadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
