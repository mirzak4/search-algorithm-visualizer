import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisfooterComponent } from './visfooter.component';

describe('VisfooterComponent', () => {
  let component: VisfooterComponent;
  let fixture: ComponentFixture<VisfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
