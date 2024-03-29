import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminguncelleComponent } from './adminguncelle.component';

describe('AdminguncelleComponent', () => {
  let component: AdminguncelleComponent;
  let fixture: ComponentFixture<AdminguncelleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminguncelleComponent]
    });
    fixture = TestBed.createComponent(AdminguncelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
