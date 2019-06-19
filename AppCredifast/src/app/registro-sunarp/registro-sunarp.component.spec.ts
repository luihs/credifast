import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSunarpComponent } from './registro-sunarp.component';

describe('RegistroSunarpComponent', () => {
  let component: RegistroSunarpComponent;
  let fixture: ComponentFixture<RegistroSunarpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroSunarpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSunarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
