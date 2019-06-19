import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSunatComponent } from './registro-sunat.component';

describe('RegistroSunatComponent', () => {
  let component: RegistroSunatComponent;
  let fixture: ComponentFixture<RegistroSunatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroSunatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSunatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
