import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpReceptorPageComponent } from './ip-receptor-page.component';

describe('IpReceptorPageComponent', () => {
  let component: IpReceptorPageComponent;
  let fixture: ComponentFixture<IpReceptorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpReceptorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpReceptorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
