import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMontoComponent } from './registro-monto.component';

describe('RegistroMontoComponent', () => {
  let component: RegistroMontoComponent;
  let fixture: ComponentFixture<RegistroMontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
