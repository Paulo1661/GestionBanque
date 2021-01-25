import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontantDialogComponent } from './montant-dialog.component';

describe('MontantDialogComponent', () => {
  let component: MontantDialogComponent;
  let fixture: ComponentFixture<MontantDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontantDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MontantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
