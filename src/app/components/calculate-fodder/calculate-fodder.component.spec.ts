import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateFodderComponent } from './calculate-fodder.component';

describe('CalculateFodderComponent', () => {
  let component: CalculateFodderComponent;
  let fixture: ComponentFixture<CalculateFodderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateFodderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateFodderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
