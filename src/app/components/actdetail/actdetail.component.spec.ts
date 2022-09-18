import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActdetailComponent } from './actdetail.component';

describe('ActdetailComponent', () => {
  let component: ActdetailComponent;
  let fixture: ComponentFixture<ActdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
