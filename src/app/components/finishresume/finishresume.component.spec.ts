import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishresumeComponent } from './finishresume.component';

describe('FinishresumeComponent', () => {
  let component: FinishresumeComponent;
  let fixture: ComponentFixture<FinishresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishresumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
