import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingoruntuleComponent } from './admingoruntule.component';

describe('AdmingoruntuleComponent', () => {
  let component: AdmingoruntuleComponent;
  let fixture: ComponentFixture<AdmingoruntuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmingoruntuleComponent]
    });
    fixture = TestBed.createComponent(AdmingoruntuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
