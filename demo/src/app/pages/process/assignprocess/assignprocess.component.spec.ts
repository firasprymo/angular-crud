import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignprocessComponent } from './assignprocess.component';

describe('AssignprocessComponent', () => {
  let component: AssignprocessComponent;
  let fixture: ComponentFixture<AssignprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignprocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
