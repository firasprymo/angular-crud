import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowprocessComponent } from './showprocess.component';

describe('ShowprocessComponent', () => {
  let component: ShowprocessComponent;
  let fixture: ComponentFixture<ShowprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowprocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
