import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesListComponent } from './pieces-list.component';

describe('PiecesListComponent', () => {
  let component: PiecesListComponent;
  let fixture: ComponentFixture<PiecesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiecesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
