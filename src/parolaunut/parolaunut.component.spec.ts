import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParolaunutComponent } from './parolaunut.component';

describe('ParolaunutComponent', () => {
  let component: ParolaunutComponent;
  let fixture: ComponentFixture<ParolaunutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParolaunutComponent]
    });
    fixture = TestBed.createComponent(ParolaunutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
