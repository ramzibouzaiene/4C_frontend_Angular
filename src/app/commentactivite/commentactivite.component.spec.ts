import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentactiviteComponent } from './commentactivite.component';

describe('CommentactiviteComponent', () => {
  let component: CommentactiviteComponent;
  let fixture: ComponentFixture<CommentactiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentactiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentactiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
