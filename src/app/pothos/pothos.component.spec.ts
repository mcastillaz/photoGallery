import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PothosComponent } from './pothos.component';

describe('PothosComponent', () => {
  let component: PothosComponent;
  let fixture: ComponentFixture<PothosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PothosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PothosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
