import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShardsPageComponent } from './shards-page.component';

describe('ShardsPageComponent', () => {
  let component: ShardsPageComponent;
  let fixture: ComponentFixture<ShardsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShardsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
