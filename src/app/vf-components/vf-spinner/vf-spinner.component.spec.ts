import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfSpinnerComponent } from './vf-spinner.component';

describe('VfSpinnerComponent', () => {
  let component: VfSpinnerComponent;
  let fixture: ComponentFixture<VfSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VfSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
