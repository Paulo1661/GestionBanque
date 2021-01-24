import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveuClientComponent } from './nouveu-client.component';

describe('NouveuClientComponent', () => {
  let component: NouveuClientComponent;
  let fixture: ComponentFixture<NouveuClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveuClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveuClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
