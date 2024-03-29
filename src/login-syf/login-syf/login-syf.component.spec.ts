import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSyfComponent } from './login-syf.component';

describe('LoginSyfComponent', () => {
  let component: LoginSyfComponent;
  let fixture: ComponentFixture<LoginSyfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSyfComponent]
    });
    fixture = TestBed.createComponent(LoginSyfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
