import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KayitsyfComponent } from './kayitsyf.component';

describe('KayitsyfComponent', () => {
  let component: KayitsyfComponent;
  let fixture: ComponentFixture<KayitsyfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KayitsyfComponent]
    });
    fixture = TestBed.createComponent(KayitsyfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
