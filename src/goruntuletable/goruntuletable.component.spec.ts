import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoruntuletableComponent } from './goruntuletable.component';

describe('GoruntuletableComponent', () => {
  let component: GoruntuletableComponent;
  let fixture: ComponentFixture<GoruntuletableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoruntuletableComponent]
    });
    fixture = TestBed.createComponent(GoruntuletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
