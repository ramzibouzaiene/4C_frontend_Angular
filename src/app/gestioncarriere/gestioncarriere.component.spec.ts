import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncarriereComponent } from './gestioncarriere.component';

describe('GestioncarriereComponent', () => {
  let component: GestioncarriereComponent;
  let fixture: ComponentFixture<GestioncarriereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioncarriereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncarriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
