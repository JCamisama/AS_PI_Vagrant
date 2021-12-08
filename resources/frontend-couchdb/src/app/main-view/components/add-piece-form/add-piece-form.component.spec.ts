import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPieceFormComponent } from './add-piece-form.component';

describe('AddPieceFormComponent', () => {
  let component: AddPieceFormComponent;
  let fixture: ComponentFixture<AddPieceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPieceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPieceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
