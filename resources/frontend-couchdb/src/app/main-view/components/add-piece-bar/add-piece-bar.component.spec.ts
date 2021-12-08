import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPieceBarComponent } from './add-piece-bar.component';

describe('AddPieceBarComponent', () => {
  let component: AddPieceBarComponent;
  let fixture: ComponentFixture<AddPieceBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPieceBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPieceBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
