import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldePosterComponent } from './solde-poster.component';

describe('SoldePosterComponent', () => {
  let component: SoldePosterComponent;
  let fixture: ComponentFixture<SoldePosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldePosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
