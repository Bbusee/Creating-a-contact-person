import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehberGoruntulemeComponent } from './rehber-goruntuleme.component';

describe('RehberGoruntulemeComponent', () => {
  let component: RehberGoruntulemeComponent;
  let fixture: ComponentFixture<RehberGoruntulemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RehberGoruntulemeComponent]
    });
    fixture = TestBed.createComponent(RehberGoruntulemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
