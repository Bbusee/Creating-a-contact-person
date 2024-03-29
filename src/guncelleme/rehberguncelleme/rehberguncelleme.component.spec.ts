import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehberguncellemeComponent } from './rehberguncelleme.component';

describe('RehberguncellemeComponent', () => {
  let component: RehberguncellemeComponent;
  let fixture: ComponentFixture<RehberguncellemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RehberguncellemeComponent]
    });
    fixture = TestBed.createComponent(RehberguncellemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
